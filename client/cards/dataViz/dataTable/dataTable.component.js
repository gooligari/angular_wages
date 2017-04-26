/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/

import controller from './dataTable.controller';
import './dataTable.scss';

let template;
if (window.ionic) {
  template = require('./dataTable.mobile.html');
  require('./dataTable.mobile.scss');
} else {
  template = require('./dataTable.web.html');
  require('./dataTable.web.scss');
}

const dataTableComponent = {
  restrict: 'E',
  bindings: {
    title: '<',
    rows: '<',
    rowColorFn: '&',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default dataTableComponent;
