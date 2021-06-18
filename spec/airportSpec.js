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

});