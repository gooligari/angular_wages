/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './userListItem.controller';

import './userListItem.scss';
import webTemplate from './userListItem.web.html';
import './userListItem.web.scss';
import mobileTemplate from './userListItem.mobile.html';
import './userListItem.mobile.scss';

const userListItemComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    width: '@',
  },
  template() {
    if (window.ionic) {
      return mobileTemplate;
    }
    return webTemplate;
  },
  controller,
  controllerAs: 'vm',
};

export default userListItemComponent;
