'use strict'

class Plane {
  constructor(){
    this._location;
  };

  land(airport) {
    airport.clearForLanding(this);
    this._location = airport;
  };

  takeOff(){
    if (this._location === "air") {
      throw new Error('Warning: plane has already taken off');
    }
    this._location.clearForTakeOff();
    this._location = "air";
  };
};
