import * as _ from 'lodash';

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
class chartController{
    constructor(auth,$scope,$rootScope , $interval){
    'ngInject';
    this.name = 'charts';
    this.auth = auth;
    this.auth.service_test();
      this.$interval = $interval;

    $scope.isAuthenticated = $rootScope.isAuthenticated;


    $scope.$on('userProfileSet', function(event, userProfile) {
            $scope.profile = userProfile;
        });

    $scope.profile = auth.userProfile();
    this.runColumnChart();

  this.runLinechart();
    }

    runLinechart() {
    this.linechart = true;
    const lineData = _.sortBy(_.map(_.range(0, 100), (d) => {
      return { x: Date.now() - (d * 10000000), y: d % (Math.floor(Math.random() * 10) + 1) };
    }), 'x');

    this.lineDataStatic = [{
      key: 'temperature',
      color: '#000080',
      unit: '°F',
      area: true,
      values: lineData,
    }, {
      key: 'Threshold',
      color: '#D11515',
      values: this.getThreshold(lineData),
    }];

    this.lineDataDynamic = [{
      key: 'temperature',
      unit: '°F',
      area: true,
      color: '#000080',
      values: _.sortBy(_.map(_.range(0, 20), (d) => {
        return { x: Date.now() - (d * 1000), y: (d % 5) + Math.random() };
      }), 'x'),
    }, {
      key: 'humidity',
      area: true,
      color: '#FFB91D',
      values: _.sortBy(_.map(_.range(0, 20), (d) => {
        return { x: Date.now() - (d * 1000), y: d % 3 };
      }), 'x'),
    }];

    this.lineChartOptions = {
      chart: {
        forceY: [0, 10],
        margin: {
          top: 20,
          right: 40,
          bottom: 40,
          left: 40,
        },
        yAxis: {
          axisLabel: 'value',
          axisLabelDistance: -20,
        },
      },
      title: {
        enable: false,
        text: 'title',
      },
      subtitle: {
        enable: false,
        text: 'subtitle',
        css: {
          'text-align': 'center',
          margin: '10px 13px 0px 7px',
        },
      },
      caption: {
        enable: true,
        html: "<b>caption</b> for a full list of options visit <a href='http://krispo.github.io/angular-nvd3/#/lineChart'>angular-nvd3</a> and click 'extended' at the top.",
        css: {
          'text-align': 'justify',
          margin: '10px 13px 0px 7px',
        },
      },
    };


    this.$interval(() => {
      this.lineDataDynamic[0].values.push({ x: Date.now(),
        y: choice(_.range(5, 10)) + Math.random() });
      if (this.lineDataDynamic[0].values.length > 20) {
        this.lineDataDynamic[0].values.shift();
      }
      this.lineDataDynamic[1].values.push({ x: Date.now(), y: choice(_.range(5)) });
      if (this.lineDataDynamic[1].values.length > 20) {
        this.lineDataDynamic[1].values.shift();
      }
    }, 1000);
  }

  runColumnChart(){
      this.columnChartProperties = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        series: ['Series A', 'Series B'],
        data: [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ],
      options: { legend: { display: true } },
      colors: ['#00ADF9', '#949FB1']
      }
    }

  getThreshold(xyData) { // eslint-disable-line class-methods-use-this
    return [{ x: _.min(_.map(xyData, 'x')), y: _.max(_.map(xyData, 'y')) },
        { x: _.max(_.map(xyData, 'x')), y: _.max(_.map(xyData, 'y')) }];
  }

}

export default chartController;
