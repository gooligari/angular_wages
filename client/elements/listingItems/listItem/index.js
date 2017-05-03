/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import listItemComponent from './listItem.component';

import './listItem.web.scss';

module.exports = angular.module('listItem', [])
  .component('listItem', listItemComponent);
