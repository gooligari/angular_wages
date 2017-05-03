/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './bigNumber.controller';
import './bigNumber.scss';

let template;

if (window.ionic) {
  template = require('./bigNumber.mobile.html');
  require('./bigNumber.mobile.scss');
} else {
  template = require('./bigNumber.web.html');
  require('./bigNumber.web.scss');
}

const bigNumberComponent = {
  restrict: 'E',
  bindings: {
    value: '<',
    unit: '<',
    title: '<',
    decimals: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default bigNumberComponent;
