'use strict';

describe('Controller: AccueilCtrl', function () {

  // load the controller's module
  beforeEach(module('b3AgileCalendarApp'));

  var AccueilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccueilCtrl = $controller('AccueilCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccueilCtrl.awesomeThings.length).toBe(3);
  });
});
