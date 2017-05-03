/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import './listItemStatus.scss';
import webTemplate from './listItemStatus.web.html';
import './listItemStatus.web.scss';
import mobileTemplate from './listItemStatus.mobile.html';
import './listItemStatus.mobile.scss';

import controller from './listItemStatus.controller';

const listItemStatusComponent = {
  restrict: 'E',
  bindings: {
    status: '<',
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

export default listItemStatusComponent;
