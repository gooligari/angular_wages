/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './bigIcon.controller';
import './bigIcon.scss';

let template = '';

if (window.ionic) {
  // ionic isn't there
  template = require('./bigIcon.mobile.html');
  require('./bigIcon.mobile.scss');
} else {
  template = require('./bigIcon.web.html');
  require('./bigIcon.web.scss');
}

const bigIconComponent = {
  restrict: 'E',
  bindings: {
    icon: '<',
    state: '<',
    coloron: '<',
    coloroff: '<',
    size: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default bigIconComponent;
