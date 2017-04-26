/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './lineChartCard.controller';
import './lineChartCard.scss';

let template;

if (window.ionic) {
  require('./lineChartCard.mobile.scss');
  template = require('./lineChartCard.mobile.html');
} else {
  require('./lineChartCard.web.scss');
  template = require('./lineChartCard.web.html');
}

const lineChartCardComponent = {
  restrict: 'E',
  bindings: {
    leftSubTitle: '<',
    rightSubTitle: '<',
    chart: '<',
    details: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default lineChartCardComponent;
