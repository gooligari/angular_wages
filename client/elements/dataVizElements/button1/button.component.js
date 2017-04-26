/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './button.controller';
import './button.scss';

let template = '';

if (window.ionic) {
  template = require('./button.mobile.html');
  require('./button.mobile.scss');
} else {
  template = require('./button.web.html');
  require('./button.web.scss');
}

const buttonComponent = {
  restrict: 'E',
  bindings: {
    text: '<',
    type: '<',
    logo: '<',
    onClick: '&',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default buttonComponent;
