/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './activityListItem.controller';
import './activityListItem.scss';

let template = '';

if (window.ionic) {
  // ionic isn't there
  template = require('./activityListItem.mobile.html');
  require('./activityListItem.mobile.scss');
} else {
  template = require('./activityListItem.web.html');
  require('./activityListItem.web.scss');
}

const activityListItemComponent = {
  restrict: 'E',
  bindings: {
    activity: '<',
    width: '@',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default activityListItemComponent;
