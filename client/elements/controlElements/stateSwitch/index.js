/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import stateSwitchComponent from './stateSwitch.component';

const stateSwitchModule = angular.module('stateSwitch', [])
  .component('stateSwitch', stateSwitchComponent);

export default stateSwitchModule;
