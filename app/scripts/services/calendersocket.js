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

    obj.getCalendar = function(){
      var socket = this.getSocket();

      socket.emit("get_calendar");
    }

    return obj;
  });
