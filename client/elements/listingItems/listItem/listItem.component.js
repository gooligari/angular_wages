/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import webTemplate from './listItem.web.html';
import mobileTemplate from './listItem.mobile.html';
import controller from './listItem.controller';

const listItemComponent = {
  restrict: 'E',
  bindings: {
    item: '<',
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

export default listItemComponent;
