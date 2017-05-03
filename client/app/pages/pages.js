import angular from 'angular';

import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import PrimitiveElement from './primitiveElements/primitiveElements';
import Chart from './charts/charts';

let pageModule = angular.module('app.pages', [

  Login,
  Dashboard,
  PrimitiveElement,
  Chart
])

.name;

export default pageModule;
