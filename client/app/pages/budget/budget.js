import angular from 'angular';
import uiRouter from 'angular-ui-router';
import budgetComponent from './budget.component';

let budgetModule = angular.module('budget', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('budget', {
      url: '/budget',
      component: 'budget'
    });
})

.component('budget', budgetComponent)
  
.name;

export default budgetModule;
