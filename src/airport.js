'use strict'

class Airport {
  constructor(weather = new Weather()){
    this._hangar = []
    this._weather = weather
  };

  planes() {
    return this._hangar;
  };

  clearForLanding(plane){
    if(this._weather.isStormy()) {
      throw new Error('cannot land during storm');
    } else if (this._hangar.length === 20) {
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
