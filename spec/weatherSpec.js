'use strict'

describe('Weather', function() {
  let weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it('gives stormy sometimes', function() {
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBe(true);
  });

  it('gives not stormy other times', function() {
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBe(false);
  });
});

