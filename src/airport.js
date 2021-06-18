'use strict'

class Airport {
  constructor(weather = new Weather(), capacity = 20){
    this._hangar = [];
    this._weather = weather;
    this._capacity = capacity;
  };

  planes() {
    return this._hangar;
  };

  clearForLanding(plane){
    if(this._weather.isStormy()) {
      throw new Error('cannot land during storm');
    } else if (this._hangar.length === this._capacity) {
      throw new Error('cannot land - airport full');
    };
    this._hangar.push(plane);
  };

  clearForTakeOff() {
    if(this._weather.isStormy()) {
      throw new Error('cannot take off during storm');
    };
    this._hangar.pop();
  };
};
