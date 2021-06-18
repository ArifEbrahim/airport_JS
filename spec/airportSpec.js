'use strict'

describe('Airport', function() {
 let airport;
 let plane;

 beforeEach(function() {
   airport = new Airport();
   plane = jasmine.createSpyObj('plane', ['land']);
 })

 it('has no planes by default', function() {
   expect(airport.planes()).toEqual([]);
 })

 it('can clear planes for landing', function() {
   airport.clearForLanding(plane);
   expect(airport.planes()).toContain(plane)
 })

 it('can clear planes for take off', function() {
  airport.clearForLanding(plane);
  airport.clearForTakeOff(plane);
  expect(airport.planes()).not.toContain(plane)
})

it('can check for stormy conditions', function() {
  expect(airport.isStormy()).toBeFalsy();
})

describe('under stormy conditions', function(){
  it('does not clear planes for take off', function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(() => { airport.clearForTakeOff(plane); }).toThrowError('cannot take off during storm');
  })
})

});