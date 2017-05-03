/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import alarmListItemComponent from './alarmListItem.component';

const alarmListItemModule = angular.module('alarmListItem', [])
  .component('alarmListItem', alarmListItemComponent);

export default alarmListItemModule;
