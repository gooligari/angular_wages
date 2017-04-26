/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


class FleetHealthController {
  constructor($element, $timeout, $scope, $window) {
    'ngInject';

    this.name = 'fleetHealth';

    $scope.$watch(() => $window.innerWidth, (n, o) => { // eslint-disable-line no-unused-vars
      this.options.chart.height = n < 500 ? 320 : 500;
    }, true);

    // $onChanges doesn't fire when underlying data is changed
    // need to manually deep watch the data object
    $scope.$watch('vm.data', (newVal) => {
      this.fleetHealthData = newVal;
      this.redraw();
    }, true);

    this.$element = $element;
    this.$timeout = $timeout;

    this.infoOverlayHidden = true;

    this.normalStatus = {
      name: 'normal',
      label: this.normalLabel || 'Normal',
    };

    this.alarmStatus = {
      name: 'alarm',
      label: this.alarmLabel || 'Critical',
    };

    this.warningStatus = {
      name: 'warning',
      label: this.warningLabel || 'Warning',
    };

    this.statuses = [this.normalStatus, this.alarmStatus, this.warningStatus];

    // default to normal status
    this.activeStatus = this.normalStatus;

    // this.data is expected to be an object with the following structure (for example):
    // {
    //   "normal": 15,
    //   "warning": 5,
    //   "alarm": 20
    // }
    this.seriesData = this.createChartData(this.data);

    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        donut: true,
        growOnHover: false, // this option seems to
                            //  really mess with the displayed gradients
        donutRatio: 1, // needed to set individual radii
        x(d) {
          return d.key;
        },
        y(d) {
          return d.y;
        },
        showLabels: false,
        pie: {
          startAngle(d) { return d.startAngle; },
          endAngle(d) { return d.endAngle; },
          dispatch: {
            elementClick: (e) => {
              const selectedStatusName = e.data.key;
              const selectedStatus =
              this.statuses.find(statusOption => selectedStatusName === statusOption.label);
              this.setActiveStatus(selectedStatus);
            },
          },
        },
        duration: 500,
        showLegend: false,
        tooltip: {
          enabled: false,
        },
        dispatch: {
          stateChange(e) { console.log(e); }, // eslint-disable-line no-console
          changeState(e) { console.log(e); }, // eslint-disable-line no-console
          renderEnd: (e) => {                 // eslint-disable-line no-unused-vars
            // TODO: these don't get cleaned up, and may be the cause of a memory leak
            let grads = d3.select($element[0]) // eslint-disable-line prefer-const
              .select('svg')
              .append('defs').selectAll('radialGradient')
              .data(this.seriesData)
              .enter()
              .append('radialGradient')
              .attr('gradientUnits', 'userSpaceOnUse')
              .attr('cx', 0)
              .attr('cy', 0)
              .attr('r', '100%')
              .attr('id', (d, i) => `grad_fleethealth${i}`);
            grads.append('stop').attr('offset', (d, i) => {   // eslint-disable-line no-unused-vars
              if (d.selected) {
                return '10%';
              }
              return '0.2%';
            }).style('stop-color', 'white');
            grads.append('stop').attr('offset', '27%').style('stop-color', (d, i) => d.color); // eslint-disable-line no-unused-vars
            d3.select($element[0]).selectAll('.nv-slice path').attr('fill', (d, i) => `url(#grad_fleethealth${i})`);
          },
        },
      },
    };
    d3.scale.category10();
    $timeout(() => {
      // need to call this to trigger a refresh after initialization otherwise
      // the charts look weird (small and uncolored)
      this.api.refresh();
    });
  }

  createChartData(rawData) {
    const alarmCount = rawData.alarm || 0;
    const warningCount = rawData.warning || 0;
    const normalCount = rawData.normal || 0;

    const innerRadius = 0.65;
    const outerRadius = 0.9;// 1
    const selectedRadius = 0.98;// 1.0S4;

    return [
      {
        key: this.alarmStatus.label,
        y: alarmCount,
        color: '#BC0E00',
        selected: this.activeStatus === this.alarmStatus,
        innerRadius,
        outerRadius: this.activeStatus === this.alarmStatus ? selectedRadius : outerRadius,
      },
      {
        key: this.warningStatus.label,
        y: warningCount,
        color: '#F4CB00',
        selected: this.activeStatus === this.warningStatus,
        innerRadius,
        outerRadius: this.activeStatus === this.warningStatus ? selectedRadius : outerRadius,
      },
      {
        key: this.normalStatus.label,
        y: normalCount,
        color: '#37C91A',
        selected: this.activeStatus === this.normalStatus,
        innerRadius,
        outerRadius: this.activeStatus === this.normalStatus ? selectedRadius : outerRadius,
      }];
  }

  redraw() {
    this.seriesData = this.createChartData(this.fleetHealthData);
    this.options.chart.arcsRadius = _.map(this.seriesData, (series) => {
      // change the radius of the selected slice
      return {
        inner: series.innerRadius,
        outer: series.outerRadius,
      };
    });
  }

  $onChanges() {
    // this event doesn't fire when the data is changed due to being an object
    // need to manually deep watch the data to detect changes
  }

  getActiveStatPercentage() {
    const total =
    _.sum(_.map(this.fleetHealthData, (v, k) => v)); // eslint-disable-line no-unused-vars
    const percentage = Math.round((this.fleetHealthData[this.activeStatus.name] / total) * 100);
    return percentage;
  }

  getActiveStatusLabel() {
    return `IN ${this.activeStatus.label.toUpperCase()} STATE`;
  }

  setActiveStatus(status) {
    this.activeStatus = status;
    this.$timeout(() => {
      this.redraw();
    });
  }

  showInfoOverlay() {
    this.infoOverlayHidden = false;
  }

  hideInfoOverlay() {
    this.infoOverlayHidden = true;
  }
}


export default FleetHealthController;
