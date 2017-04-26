import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chartsComponent from './charts.component';

let chartsModule = angular.module('charts', [
  uiRouter
])

.component('charts', chartsComponent)
  
.name;

export default chartsModule;
