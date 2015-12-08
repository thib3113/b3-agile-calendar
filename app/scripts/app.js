'use strict';

/**
 * @ngdoc overview
 * @name b3AgileCalendarApp
 * @description
 * # b3AgileCalendarApp
 *
 * Main module of the application.
 */
angular
  .module('b3AgileCalendarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDraggable',
    'btford.socket-io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/accueil.html',
        controller: 'AccueilCtrl',
        controllerAs: 'Accueil'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/a'
      });
  })
  .config(function(socketFactoryProvider){
    // socketFactoryProvider.ioSocket(io.connect('localhost:3113'));
  });
