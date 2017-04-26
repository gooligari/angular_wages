import angular from 'angular';
import Energytrend from './energytrend/energytrend';
import Shift from './shift/shift';
import Energy from './energy/energy';
import Product from './product/product';
import Budget from './budget/budget';
import Baseline from './baseline/baseline';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import PrimitiveElements from './primitiveElements/primitiveElements';

let pageModule = angular.module('app.pages', [
  Energytrend,
  Shift,
  Energy,
  Product,
  Budget,
  Baseline,
  Login,
  Dashboard,
  PrimitiveElements
])

.name;

export default pageModule;
