/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './moonGauge.controller';
import './moonGauge.scss';

let template;
if (window.ionic) {
  template = require('./moonGauge.mobile.html');
  require('./moonGauge.mobile.scss');
} else {
  template = require('./moonGauge.web.html');
  require('./moonGauge.web.scss');
}

const moonGaugeComponent = {
  restrict: 'E',
  bindings: {
    decimals: '<',
    value: '<',
    angle: '<',
    text: '<',
    unit: '<',
    min: '<',
    max: '<',
    warningMin: '<',
    criticalMin: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default moonGaugeComponent;
