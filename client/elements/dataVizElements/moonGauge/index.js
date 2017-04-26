/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import moonGaugeComponent from './moonGauge.component';

const moonGaugeModule = angular.module('moonGauge', [])
  .component('moonGauge', moonGaugeComponent);

export default moonGaugeModule;
