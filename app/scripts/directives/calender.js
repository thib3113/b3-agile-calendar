'use strict';

/**
 * @ngdoc directive
 * @name b3AgileCalendarApp.directive:calender
 * @description
 * # calender
 */
angular.module('b3AgileCalendarApp')
  .directive('calender', function () {
    return {
      templateUrl: 'views/calender.html',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      controller: function($scope, socketFactory) {
        // var myIoSocket = io.connect('localhost:3113');

        $scope.nbrWeeks = 52;
        $scope.getNumberOfWeeks = function(){
          return new Array($scope.nbrWeeks);
        }

        $scope.hourMin = 8;
        $scope.hourMax = 20;
        $scope.hourInterval = 0.5;
        $scope.getHourArray = function(){
          var hours = [];
          for (var i = $scope.hourMin * 2; i <= $scope.hourMax/0.5; i++) {
            hours.push(Math.floor((i/2)) + ":" + (i%2 * 30));
          }
          return hours;
        }

        $scope.days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

        console.log($scope.getHourArray());

        $scope.selectWeek = function(index){
          console.log("Je selectionne la semaine: " + index);
        }
      }
    };
  });
