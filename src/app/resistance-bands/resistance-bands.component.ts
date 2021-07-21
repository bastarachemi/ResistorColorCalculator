import { Component, OnInit } from '@angular/core';
import { BandsService } from '../services/bands.service';

@Component({
  selector: 'app-resistance-bands',
  templateUrl: './resistance-bands.component.html',
  styleUrls: ['./resistance-bands.component.css']
})
export class ResistanceBandsComponent implements OnInit {

  public bands: string[] = ['','','','',''];
  public digitColors: string[];
  public multiplierColors: string[];
  public toleranceColors: string[];
  public resistance: string = "";

  constructor(private bandsService: BandsService) {
    this.digitColors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
    this.multiplierColors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white','gold','silver'];
    this.toleranceColors = ['brown','red','green','blue','violet','grey','gold','silver','none'];
  }

  ngOnInit() {

  }

  onChange(value: any, index: any) {
    this.bands[index] = value;
    this.bandsService.addBand(value,index);
    if (!this.hasEmptyBands()) {
      this.resistance = this.bandsService.getCalculatedResistance();
    }
  }

  private hasEmptyBands(): boolean {
    for (let band of this.bands) {
      if (band == "") {
        return true;
      }
    }
    return false;
  }

  clear() {
    this.bands = ['','','','',''];
    this.bandsService.clear();
    this.resistance = "";
  }

  isBgDark(color: string) {
    let darkColors = ["black","brown","blue","green","grey"];
    if (darkColors.includes(color)) {
      return true;
    } else {
      return false;
    }
  }

}
