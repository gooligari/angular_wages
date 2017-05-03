/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import deviceListItemComponent from './deviceListItem.component';

import './deviceListItem.web.scss';

module.exports = angular.module('deviceListItem', [])
  .component('deviceListItem', deviceListItemComponent);
