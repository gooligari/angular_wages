/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import operatingModeComponent from './operatingMode.component';

const operatingModeModule = angular.module('operatingMode', [])
  .component('operatingMode', operatingModeComponent);

export default operatingModeModule;
