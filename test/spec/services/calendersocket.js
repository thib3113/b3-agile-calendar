'use strict';

describe('Service: calenderSocket', function () {

  // load the service's module
  beforeEach(module('b3AgileCalendarApp'));

  // instantiate service
  var calenderSocket;
  beforeEach(inject(function (_calenderSocket_) {
    calenderSocket = _calenderSocket_;
  }));

  it('should do something', function () {
    expect(!!calenderSocket).toBe(true);
  });

});
