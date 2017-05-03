/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './moreOptions.controller';

import './moreOptions.scss';
import webTemplate from './moreOptions.web.html';
import './moreOptions.web.scss';
import mobileTemplate from './moreOptions.mobile.html';
import './moreOptions.mobile.scss';

const moreOptionsComponent = {
  restrict: 'E',
  bindings: { options: '<' },
  template() {
    if (window.ionic) {
      return mobileTemplate;
    }
    return webTemplate;
  },
  controller,
  controllerAs: 'vm',
};

export default moreOptionsComponent;
