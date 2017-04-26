
import bigNumber from './bigNumber';
import bigIcon from './bigIcon';
// import moonGauge from './moonGauge';
import lineChart from './lineChart';
import columnChart from './columnChart';
import button from './button';

module.exports = angular
  .module('dataVizComponents', [
    bigNumber.name,
    bigIcon.name,
    // moonGauge.name,
    lineChart.name,
    columnChart.name,
    button.name
  ])
