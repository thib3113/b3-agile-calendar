'use strict';

/**
 * @ngdoc filter
 * @name b3AgileCalendarApp.filter:stripColon
 * @function
 * @description
 * # stripColon
 * Filter in the b3AgileCalendarApp.
 */
angular.module('b3AgileCalendarApp')
  .filter('stripColon', function () {
    return function (input) {
      return input.replace(':', '');
    };
  });
