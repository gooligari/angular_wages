/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import binarySwitch from './binarySwitch';
import dropDown from './dropDown';
import thresholdSlider from './thresholdSlider';
import stateSwitch from './stateSwitch';

module.exports = angular
  .module('controlElementComponents', [
    binarySwitch.name,
    dropDown.name,
    thresholdSlider.name,
    stateSwitch.name,
  ]);
