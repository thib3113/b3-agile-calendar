'use strict';

describe('Filter: stripColon', function () {

  // load the filter's module
  beforeEach(module('b3AgileCalendarApp'));

  // initialize a new instance of the filter before each test
  var stripColon;
  beforeEach(inject(function ($filter) {
    stripColon = $filter('stripColon');
  }));

  it('should return the input prefixed with "stripColon filter:"', function () {
    var text = 'angularjs';
    expect(stripColon(text)).toBe('stripColon filter: ' + text);
  });

});
