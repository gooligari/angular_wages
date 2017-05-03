/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './login.controller';
import './login.scss';

let template;

if (window.ionic) {
  // ionic isn't there
  template = require('./login.mobile.html');
  require('./login.mobile.scss');
} else {
  template = require('./login.web.html');
  require('./login.web.scss');
}

const loginComponent = {
  restrict: 'E',
  bindings: {
    alt: '<',
    logo: '<',
    tagline: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default loginComponent;
