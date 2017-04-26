import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productComponent from './product.component';

let productModule = angular.module('product', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('product', {
      url: '/product',
      component: 'product'
    });
})

.component('product', productComponent)

.name;

export default productModule;
