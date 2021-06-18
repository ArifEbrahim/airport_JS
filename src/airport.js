'use strict'

class Airport {
  constructor(){
    this._hangar = []
  };

  planes() {
    return this._hangar;
  }

  clearForLanding(plane){
    this._hangar.push(plane);
  }

  clearForTakeOff() {
    if(this.isStormy()) {
      throw new Error('cannot take off during storm');
    }
    this._hangar.pop();
  }

  isStormy(){
    return false;
  }
}