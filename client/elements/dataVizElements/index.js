/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import bigNumber from './bigNumber';
import bigIcon from './bigIcon';
// import moonGauge from './moonGauge';
import lineChart from './lineChart';
import columnChart from './columnChart';
import button from './button';
import moreOptions from './moreOptions';

module.exports = angular
  .module('dataVizComponents', [
    bigNumber.name,
    bigIcon.name,
    // moonGauge.name,
    lineChart.name,
    columnChart.name,
    button.name,
    moreOptions.name
  ])
