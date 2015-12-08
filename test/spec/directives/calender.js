'use strict';

describe('Directive: calender', function () {

  // load the directive's module
  beforeEach(module('b3AgileCalendarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<calender></calender>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the calender directive');
  }));
});
