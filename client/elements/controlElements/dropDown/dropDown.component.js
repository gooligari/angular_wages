/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './dropDown.controller';
import './dropDown.scss';

let template = '';

if (window.ionic) {
  template = require('./dropDown.mobile.html');
  require('./dropDown.mobile.scss');
} else {
  template = require('./dropDown.web.html');
  require('./dropDown.web.scss');
}

const dropDownComponent = {
  restrict: 'E',
  bindings: {
    placeHolder: '<',
    options: '<',
    model: '=',
    onChange: '&',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default dropDownComponent;
