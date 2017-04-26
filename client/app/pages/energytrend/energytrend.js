import angular from 'angular';
import uiRouter from 'angular-ui-router';
import energytrendComponent from './energytrend.component';

let energytrendModule = angular.module('energytrend', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('energytrend', {
      url: '/energytrend',
      component: 'energytrend'
    });
})

.component('energytrend', energytrendComponent)

.name;

export default energytrendModule;
