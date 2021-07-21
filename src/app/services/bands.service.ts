import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private bands: string[] = ['','','','',''];
  private resistance: string = "";
  private colorData = [];

  constructor() {
    this.colorData = [
      {color:"black", digit:"0", multiplier:[1,""]},
      {color:"brown", digit:"1", multiplier:[10,""], tolerance:1},
      {color:"red", digit:"2", multiplier:[100,""], tolerance:2},
      {color:"orange", digit:"3", multiplier:[1,"K"]},
      {color:"yellow", digit:"4", multiplier:[10,"K"]},
      {color:"green", digit:"5", multiplier:[100,"K"], tolerance:0.5},
      {color:"blue", digit:"6", multiplier:[1,"M"], tolerance:0.25},
      {color:"violet", digit:"7", multiplier:[10,"M"], tolerance:0.1},
      {color:"grey", digit:"8", multiplier:[100,"M"], tolerance:0.05},
      {color:"white", digit:"9", multiplier:[1,"G"]},
      {color:"gold", multiplier:[0.1,""], tolerance:5},
      {color:"silver", multiplier:[0.01,""], tolerance:10},
      {color:"none", tolerance:20},
    ]
  }

  getBands(): string[] {
    return this.bands;
  }

  addBand(color: string, index: number) {
    if (!color) {
      throw new Error('Color does not exist');
    }

    this.bands[index] = color;
  }

  getCalculatedResistance() {
    if (!this.hasEmptyBands()) {
      this.resistance = this.getDigits() * this.getMultiplier()[0] + this.getMultiplier()[1];
      this.resistance += " +/- " + this.getTolerance() + "%";
      return this.resistance;
    } else {
        return "";
    }
  }

  private getDigits() {
    let firstDigit = this.colorData.find(firstBand => firstBand.color == this.bands[0]).digit;
    let secondDigit = this.colorData.find(secondBand => secondBand.color == this.bands[1]).digit;
    let thirdDigit = this.colorData.find(thirdBand => thirdBand.color == this.bands[2]).digit;
    return parseInt(firstDigit + secondDigit + thirdDigit);
  }

  private getMultiplier() {
    let multiplier = this.colorData.find(fourthband => fourthband.color == this.bands[3]).multiplier;
    return multiplier;
  }

  private getTolerance() {
    let tolerance = this.colorData.find(fifthBand => fifthBand.color == this.bands[4]).tolerance;
    return tolerance;
  }

  clear() {
    this.bands = ['','','','',''];
    this.resistance = "";
  }

  private hasEmptyBands(): boolean {
    for (let band of this.bands) {
      if (band == "") {
        return true;
      }
    }
    return false;
  }
}
