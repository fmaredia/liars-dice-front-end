'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '/',
    templateUrl: './index.html',
    views: {
      'app.nav': {
        abstract: true,
        templateUrl: './views/nav.html',
        controller:'GameCtrl'
      },
      '': {
        abstract: true,
        templateUrl: './views/content.html',
        controller: 'GameCtrl'
      }
    }
  })

  .state('app.dash', {
    templateUrl: './views/dash.html',
    controller: 'DashCtrl'
  })
});