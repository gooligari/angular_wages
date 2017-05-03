/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import newdropDownComponent from './newdropDown.component';

const newdropDownModule = angular.module('dropDown', [])
  .component('dropDown', newdropDownComponent);

export default newdropDownModule;
