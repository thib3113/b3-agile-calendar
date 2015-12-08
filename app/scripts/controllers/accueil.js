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

  $scope.createRoom = function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    $location.path('/' + text);
  }
});
