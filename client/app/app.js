import angular from 'angular';
import route   from 'angular-route';
// moment imports
import moment from 'moment';

import nvd3 from 'angular-nvd3';
import uiRouter from 'angular-ui-router';
import Common from './common/common'; //common cards
import Cards from '../cards/cards'; //cards
import Elements from '../elements/elements'; //ui elements
import Pages from './pages/pages';    //web pages
import AppComponent from './app.component';
import lock  from 'angular-lock';
import authManager from 'angular-jwt';
import angularCharts from 'angular-chart.js';

import 'normalize.css';

// api imports
import Api from './api';

angular.module('app', [
    'nvd3',
    // 'angularMoment',
    'auth0.lock',
    uiRouter,
    route,
    authManager,
    Common,
    Pages,
    Cards.name,
    Elements.name,
    Api.name,
    angularCharts
  ])
  .config(($locationProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run(($rootScope, auth, authManager, lock) => {
      'ngInject';

       lock.interceptHash();

       $rootScope.auth= auth;

       auth.registerAuthenticationListener();

       authManager.checkAuthOnRefresh();

       authManager.redirectWhenUnauthenticated();

      // console.log('run');
  })
  .component('app', AppComponent)

  .config(config);

    config.$inject = ['$routeProvider', '$httpProvider', 'jwtOptionsProvider', 'jwtInterceptorProvider','lockProvider'];

    function config($routeProvider, $httpProvider, jwtOptionsProvider, jwtInterceptorProvider, lockProvider) {
    // Initialization for the Lock widget
      lockProvider.init({
        clientID: '6WR-iNvSzaYsiUZKOBRw9jiucUnIxdC5',
        domain: 'wages.auth0.com'
      });
        // Configuration for angular-jwt
      jwtOptionsProvider.config({

        tokenGetter: function() {
          return localStorage.getItem('id_token');
        },
        whiteListedDomains: ['localhost'],
        unauthenticatedRedirectPath: '/login'
      });

      // console.log('config');
      // Add the jwtInterceptor to the array of HTTP interceptors
      // so that JWTs are attached as Authorization headers
      $httpProvider.interceptors.push('jwtInterceptor');

      // $routeProvider
      //     .when('/', {
      //       controller: 'DashboardController',
      //       templateUrl: '../pages/dashboard/dashboard.html'
      //     })
      //     .when('/login', {
      //       controller: 'LoginController',
      //       templateUrl: './pages/login/login.html'
      //     })
      //     .when('/about', {
      //       controller: 'aboutController',
      //       templateUrl: './pages/about/about.html'
      //     });




    }
