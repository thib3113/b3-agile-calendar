'use strict';

/**
 * @ngdoc service
 * @name b3AgileCalendarApp.calenderSocket
 * @description
 * # calenderSocket
 * Factory in the b3AgileCalendarApp.
 */
angular.module('b3AgileCalendarApp')
  .factory('calenderSocket', function (socketFactory) {
    var obj = {}

    obj.getSocket = function(){
      var myIoSocket = io.connect('localhost:3113');

      var mySocket = socketFactory({
        ioSocket: myIoSocket
      });

      return mySocket;
    }

    obj.getCalendar = function(idCalendar){
      var socket = this.getSocket();

      socket.emit("get_calendar", {id: idCalendar});
    }

    obj.saveCalendar = function(calendar, idCalendar){
      var socket = this.getSocket();

      console.log("Sauvegarde !");
      socket.emit("update_calendar", {calendar: calendar, id: idCalendar});
    }

    return obj;
  });
