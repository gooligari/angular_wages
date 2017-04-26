import angular from 'angular';
import uiRouter from 'angular-ui-router';
import energyComponent from './energy.component';

let energyModule = angular.module('energy', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('energy', {
      url: '/energy',
      component: 'energy'
    });
})

.component('energy', energyComponent)

.name;

export default energyModule;
