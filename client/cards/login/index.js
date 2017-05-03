/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import loginComponent from './login.component';

const loginModule = angular.module('loginCard', [])
  .component('loginCard', loginComponent);

export default loginModule;
