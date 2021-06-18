'use strict';

describe('Feature Test:', function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('when not stormy', function() {
    beforeEach(function() {
      spyOn(Math,'random').and.returnValue(0);
    });

    // As an air traffic controller 
    // To get passengers to a destination 
    // I want to instruct a plan to land at an airport and confirm that it has landed

    it('planes can be instructed to land at an airport', function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller 
    // So I can get passengers on the way to their destination 
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
      
    it('planes can be instructed to land at an airport', function() {
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    });

    // As an air traffic controller 
    // To ensure safety 
    // I want to prevent landing when the airport is full 

    it('has a default capacity', function() {
      for(let i = 0; i < 20; i++) {
        plane.land(airport);
      };
      expect(function(){ plane.land(airport); }).toThrowError('cannot land - airport full');
    });

    // As the system designer
    // So that the software can be used for many different airports
    // I would like a default airport capacity that can be overridden as appropriate

    it('has a variable capacity', function() {
      airport = new Airport(new Weather(),30)
      for(let i = 0; i < 30; i++) {
        plane.land(airport);
      };
      expect(function(){ plane.land(airport); }).toThrowError('cannot land - airport full');
    });

    it('planes already flying cannot take off again', function () {
      plane.land(airport);
      plane.takeOff();
      expect(function(){ plane.takeOff(); }).toThrowError('Warning: plane has already taken off');
    });
  });

  describe('when stormy', function() {

    // As an air traffic controller 
    // To ensure safety 
    // I want to prevent takeoff when weather is stormy 

    it('blocks takeoff', function() {
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeOff(); }).toThrowError('cannot take off during storm');
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller 
    // To ensure safety 
    // I want to prevent landing when weather is stormy 
  
    it('blocks landing', function() {
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
