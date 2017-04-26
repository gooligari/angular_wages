/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './lineChart.controller';
import './lineChart.scss';

let template;
if (window.ionic) {
  template = require('./lineChart.mobile.html');
  require('./lineChart.mobile.scss');
} else {
  template = require('./lineChart.web.html');
  require('./lineChart.web.scss');
}

const lineChartComponent = {
  restrict: 'E',
  bindings: {
    data: '<',
    title: '<',
    options: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default lineChartComponent;
