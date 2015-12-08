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
      controller: function($scope, $routeParams, calenderSocket) {
        // var myIoSocket = io.connect('localhost:3113');

        $scope.idCalendar = $routeParams.id;

        calenderSocket.getCalendar($scope.idCalendar);

        calenderSocket.getSocket().on("get_calendar", function(data){
          // console.log("J'ai recu un calendar !");
          $scope.calendar = data;
          // console.log(data);
          $scope.selectWeek(0);
        });

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
            hours.push(Math.floor((i/2)) + ":" + ((i%2 == 0) ? ("00") : ("30")));
          }
          return hours;
        }

        // $scope.days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
        $scope.days = [
          {day: "Lundi"},
          {day: "Mardi"},
          {day: "Mercredi"},
          {day: "Jeudi"},
          {day: "Vendredi"}
        ];

        console.log($scope.getHourArray());

        $scope.goodWeek = null;
        $scope.selectWeek = function(index){
          $scope.loading = true;

          $scope.days = [
            {day: "Lundi"},
            {day: "Mardi"},
            {day: "Mercredi"},
            {day: "Jeudi"},
            {day: "Vendredi"}
          ];

          for ( var i = 0 ; i < 5 ; i++ ) {
            $.extend($scope.days[i], $scope.calendar[index][i]);
          }

          console.log("Je selectionne la semaine: " + index);
          $scope.goodWeek = $scope.calendar[index];
          console.log($scope.days);
          setTimeout(function(){
            $scope.loading = false;
            $scope.$apply();
          }, 500);
        }
      }
    };
  });
