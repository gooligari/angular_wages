/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import lineChartComponent from './lineChart.component';

const lineChartModule = angular.module('lineChart', [])
  .component('lineChart', lineChartComponent);

export default lineChartModule;
