/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


class LineChartController {
  constructor($timeout, $scope) {
    'ngInject';

    const c10 = d3.scale.category10();

    this.defaultOptions = {
      chart: {
        type: 'lineWithFocusChart',
        height: 450,
        showLegend: false,
        margin: {
          top: 20,
          right: 60,
          bottom: 60,
          left: 60,
        },
        color(d, i) {
          if (d.color) {
            return d.color;
          }
          return c10(i);
        },
        useInteractiveGuideline: true,
        dispatch: {
          renderEnd(e) {   // eslint-disable-line no-unused-vars
            const svg = d3.select('#line-chart svg');
            svg.append('linearGradient')
              .attr('id', 'temperature-gradient')
              .attr('gradientUnits', 'userSpaceOnUse')
              .attr('x1', '0%')
              .attr('y1', '0%')
              .attr('x2', '0%')
              .attr('y2', '100%')
              .selectAll('stop')
              .data([
                { offset: '0%', color: '#000080' },
                { offset: '30%', color: '#000080' },
                { offset: '100%', color: '#001342' },
              ])
              .enter()
              .append('stop')
              .attr('offset', d => d.offset)
              .attr('stop-color', d => d.color)
              .attr('stop-opacity', d => d.opacity);
          },
        },
        interactiveLayer: {
          tooltip: {
            contentGenerator(data) {
              // custom tooltip on hover
              const html = (_.map(data.series, (series) => {
                const formattedTime = d3.time.format('%y-%m-%d %I:%M:%S%p')(new Date(series.data.x));
                const formattedNumber = d3.format('.3f')(series.data.y);
                return `<div><span style='color:${series.color}'>${series.key}</span> <b>${formattedNumber}</b> @ ${formattedTime}</div>`;
              })).join('');
              return html;
            },
          },
        },
        yAxis: {
          tickFormat(datapoint) {
            return d3.format('.2r')(datapoint);
          },
          ticks: 5,
        },
        xAxis: {
          tickFormat(timestamp) {
            if (moment().diff(timestamp, 'days') > 1) {
              return d3.time.format('%m-%d %I:%M%p')(new Date(timestamp));
            } else if (moment().diff(timestamp, 'hours') > 1) {
              if (moment().day() !== moment(timestamp).day()) {
                return d3.time.format('%m-%d %I:%M%p')(new Date(timestamp));
              }
              return d3.time.format('%I:%M%p')(new Date(timestamp));
            }
            return d3.time.format('%I:%M:%S%p')(new Date(timestamp));
          },
          ticks: 5,
          showMaxMin: false,
          tickPadding: 15,
        },
        x2Axis: {
          tickFormat(d) {
            return d3.time.format(' %m-%d %I:%M%p')(new Date(d));
          },
          ticks: 5,
          showMaxMin: false,
        },
      },
    };

    // take default line settings and override with whatever may be
    // passed in for options
    this.config = _.merge({}, this.defaultOptions, this.options);

    $timeout(() => {
      this.api.refresh();
    }, 0);

    $scope.$watch('vm.options', () => {
      if (this.options.title && this.options.title.enable === false) {
        this.options.subtitle.enable = false;
      }
      this.config = _.merge({}, this.defaultOptions, this.options)
      $timeout(() => {
        this.api.refresh();
      }, 0);
    }, true);
  }
}

export default LineChartController;
