import { browser, by, element } from 'protractor';

export class CalculatorPage {

  selectBandColor(color: string, bandNumber: number) {
    let bandID = "band" + bandNumber;
    let selector = "#" + bandID + " option[value=" + color + "]";
    element(by.id(bandID)).click();
    element(by.css(selector)).click();
  }

  clearButton() {
    element(by.id("clearBtn")).click();
  }
}
