/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './newdropDown.controller';
import './dropDown.scss';

let template = '';

if (window.ionic) {
  template = require('./newdropDown.mobile.html');
  require('./newdropDown.mobile.scss');
} else {
  template = require('./newdropDown.web.html');
  require('./newdropDown.web.scss');
}

const newdropDownComponent = {
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

export default newdropDownComponent;
