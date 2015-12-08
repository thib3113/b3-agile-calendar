'use strict';

/**
* @ngdoc function
* @name b3AgileCalendarApp.controller:AccueilCtrl
* @description
* # AccueilCtrl
* Controller of the b3AgileCalendarApp
*/
angular.module('b3AgileCalendarApp')
.controller('AccueilCtrl', function ($scope, $location) {
  $scope.goTo = function(room){
    $location.path('/' + room);
  }
});
