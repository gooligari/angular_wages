/**
*
*  © 2016 Parker Hannifin and Exosite. All rights reserved.
*
**/


import controller from './columnChart.controller';

import './columnChart.scss';
import './columnChart.web.scss';
import './columnChart.mobile.scss';

const columnChartComponent = {
  restrict: 'E',
  bindings: {
    data: '<',
    title: '<',
  },
  template: '<highchart style="width:100%" config="vm.config"></highchart>',
  controller,
  controllerAs: 'vm',
};

export default columnChartComponent;
