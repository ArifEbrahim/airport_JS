'use strict'

describe('Airport', function() {
 let airport;
 let plane;
 let weather;

 beforeEach(function() {
   weather = jasmine.createSpyObj('weather', ['isStormy']);
   airport = new Airport(weather);
   plane = jasmine.createSpyObj('plane', ['land']);
 });

 it('has no planes by default', function() {
   expect(airport.planes()).toEqual([]);
 });

 describe('when not stormy', function() {
   beforeEach(function() {
    weather.isStormy.and.returnValue(false);
   })

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toContain(plane)
  });
 
  it('can clear planes for take off', function() {
   airport.clearForLanding(plane);
   airport.clearForTakeOff(plane);
   expect(airport.planes()).not.toContain(plane)
  });

  it('has a default capacity', function() {
    for(let i = 0; i < 20; i++) {
      airport.clearForLanding(plane);
    };
    expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land - airport full');
  });

 });

  describe('under stormy conditions', function(){
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    })

    it('does not clear planes for take off', function() {
      expect(() => { airport.clearForTakeOff(plane); }).toThrowError('cannot take off during storm');
    });

    it('does not clear planes for landing', function() {
      expect(() => { airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
  });

});
