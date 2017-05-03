/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import fleetHealthComponent from './fleetHealth.component';

const fleetHealthModule = angular.module('fleetHealth', [])
  .directive('fleetHealth', fleetHealthComponent);

export default fleetHealthModule;
