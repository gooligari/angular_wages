/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './binarySwitch.controller';
import './binarySwitch.scss';

let template;

if (window.ionic) {
  template = require('./binarySwitch.mobile.html');
  require('./binarySwitch.mobile.scss');
} else {
  template = require('./binarySwitch.web.html');
  require('./binarySwitch.web.scss');
}

const binarySwitchComponent = {
  restrict: 'E',
  bindings: {
    value: '=',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default binarySwitchComponent;
