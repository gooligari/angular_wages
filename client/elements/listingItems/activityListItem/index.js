/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import activityListItemComponent from './activityListItem.component';

const activityListItemModule = angular.module('activityListItem', [])
  .component('activityListItem', activityListItemComponent);

export default activityListItemModule;
