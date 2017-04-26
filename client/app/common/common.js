import angular from 'angular';
import Navbar from './navbar/navbar';
import Charts from './charts/charts';
import User from './user/user';
import contentTop from './contentTop/contentTop';

let commonModule = angular.module('app.common', [
  Navbar,
  Charts,
  User,
  contentTop
])

.name;

export default commonModule;
