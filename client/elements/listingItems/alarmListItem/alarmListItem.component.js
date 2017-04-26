/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './alarmListItem.controller';
import './alarmListItem.scss';


let template = '';

if (window.ionic) {
  // ionic isn't there
  template = require('./alarmListItem.mobile.html');
  require('./alarmListItem.mobile.scss');
} else {
  template = require('./alarmListItem.web.html');
  require('./alarmListItem.web.scss');
}

const alarmListItemComponent = {
  restrict: 'E',
  bindings: {
    alarm: '<',
    width: '@',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default alarmListItemComponent;
