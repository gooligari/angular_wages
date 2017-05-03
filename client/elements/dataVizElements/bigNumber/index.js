/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import bigNumberComponent from './bigNumber.component';

const bigNumberModule = angular.module('bigNumber', [])
  .component('bigNumber', bigNumberComponent);

export default bigNumberModule;
