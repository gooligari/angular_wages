
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import chartComponent from './charts.component';

const chartModule = angular.module('chart', [
    uiRouter,

])
.config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('chart', {
            url: '/chart',
            component: 'chart'
        })
})
.component('chart', chartComponent)

.name;

export default chartModule;
