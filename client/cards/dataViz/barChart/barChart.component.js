/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './barChart.controller';
import './barChart.scss';

let template;
if (window.ionic) {
  template = require('./barChart.mobile.html');
  require('./barChart.mobile.scss');
} else {
  template = require('./barChart.web.html');
  require('./barChart.web.scss');
}

const barChartComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
};

export default barChartComponent;
