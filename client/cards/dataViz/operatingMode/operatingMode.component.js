/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './operatingMode.controller';
import './operatingMode.scss';

let template;

if (window.ionic) {
  template = require('./operatingMode.mobile.html');
  require('./operatingMode.mobile.scss');
} else {
  template = require('./operatingMode.web.html');
  require('./operatingMode.web.scss');
}

const operatingModeComponent = {
  restrict: 'E',
  bindings: {
    iconData: '<',
    gaugeData: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default operatingModeComponent;
