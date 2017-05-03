/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import tieredLineChartComponent from './tieredLineChart.component';

const tieredLineChartModule = angular.module('tieredLineChart', [])
  .component('tieredLineChart', tieredLineChartComponent);

export default tieredLineChartModule;
