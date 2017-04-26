import angular from 'angular';
import uiRouter from 'angular-ui-router';
import baselineComponent from './baseline.component';

let baselineModule = angular.module('baseline', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('baseline', {
      url: '/baseline',
      component: 'baseline'
    });
})

.component('baseline', baselineComponent)
  
.name;

export default baselineModule;
