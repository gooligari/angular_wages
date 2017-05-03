import angular from 'angular';
import uiRouter from 'angular-ui-router';
import shiftComponent from './shift.component';

let shiftModule = angular.module('shift', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('shift', {
      url: '/shift',
      component: 'shift'
    });
})

.component('shift', shiftComponent)
  
.name;

export default shiftModule;
