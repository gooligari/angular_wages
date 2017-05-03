
import controller from './columnChart.controller';

import './columnChart.scss';
import './columnChart.web.scss';
import './columnChart.mobile.scss';

// require('chart.js/dist/Chart.min.js');
// require('angular-chart.js/dist/angular-chart.min.js');

import template from './columnChart.web.html';

const columnChartComponent = {
  restrict: 'E',
  bindings: {
    labels: '<',
    series: '<',
    data: '<',
    colors: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default columnChartComponent;
