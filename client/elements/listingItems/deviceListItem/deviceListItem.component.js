/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './deviceListItem.controller';

let template;
if (window.ionic) {
  require('./deviceListItem.mobile.scss');
  template = require('./deviceListItem.mobile.html');
} else {
  require('./deviceListItem.web.scss');
  template = require('./deviceListItem.web.html');
}

const deviceListItemComponent = {
  restrict: 'E',
  bindings: {
    device: '<',
    width: '@',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default deviceListItemComponent;
