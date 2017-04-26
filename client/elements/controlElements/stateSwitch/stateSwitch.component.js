/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './stateSwitch.controller';
import './stateSwitch.scss';

let template = '';

if (window.ionic) {
  // ionic isn't there
  template = require('./stateSwitch.mobile.html');
  require('./stateSwitch.mobile.scss');
} else {
  template = require('./stateSwitch.web.html');
  require('./stateSwitch.web.scss');
}

const stateSwitchComponent = {
  restrict: 'E',
  bindings: {
    buttons: '<',
    value: '=',
    onChange: '&',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default stateSwitchComponent;
