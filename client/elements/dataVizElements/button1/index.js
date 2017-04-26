/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import buttonCardComponent from './button.component';

const buttonCardModule = angular.module('button', [])
  .component('buttonCard', buttonCardComponent);

export default buttonCardModule;
