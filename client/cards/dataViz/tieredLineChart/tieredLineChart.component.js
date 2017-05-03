/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './tieredLineChart.controller';
import './tieredLineChart.scss';

let template;
if (window.ionic) {
  template = require('./tieredLineChart.mobile.html');
  require('./tieredLineChart.mobile.scss');
} else {
  template = require('./tieredLineChart.web.html');
  require('./tieredLineChart.web.scss');
}

const tieredLineChartComponent = {
  restrict: 'E',
  bindings: {
    data: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default tieredLineChartComponent;
