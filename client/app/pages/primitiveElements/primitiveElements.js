
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jsontree from 'json-tree2';
import primitiveComponents from './primitiveElements.component';

require('json-tree2/json-tree.css');

const primitiveModule = angular.module('primitiveElements', [
    uiRouter,
    'json-tree',

])
.config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('primitiveElements', {
            url: '/primitiveElements',
            component: 'primitiveElements'
        })
})
.component('primitiveElements', primitiveComponents)

.name;

export default primitiveModule;
