'use strict'

describe('Plane', function() {

  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  });

  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });

  it('throws an error if instructed to take off whilst in the air', function() {
    plane.land(airport);
    plane.takeOff();
    expect(function(){ plane.takeOff(); }).toThrowError('Warning: plane has already taken off');
  });
});
