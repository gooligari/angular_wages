/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import userListItemComponent from './userListItem.component';

const userListItemModule = angular.module('userListItem', [])
  .component('userListItem', userListItemComponent);

export default userListItemModule;
