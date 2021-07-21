import { browser, element, by } from 'protractor';
import { CalculatorPage } from './page-objects/calculator.po';

describe('Calculator Page', function() {
  let calculatorPage : CalculatorPage;

  beforeEach(() => {
    calculatorPage = new CalculatorPage();
    browser.get('/');
  });

  it('should not display resistance if only one band color chosen', function() {
    calculatorPage.selectBandColor("grey",0);
    expect(element(by.id("resistanceMessage")).getText()).toEqual("Resistance:");
  });

  it('should not display resistance if only two band colors chosen', function() {
    calculatorPage.selectBandColor("grey",0);
    calculatorPage.selectBandColor("blue",1);
    expect(element(by.id("resistanceMessage")).getText()).toEqual("Resistance:");
  });

  it('should not display resistance if only three band colors chosen', function() {
    calculatorPage.selectBandColor("grey",0);
    calculatorPage.selectBandColor("blue",1);
    calculatorPage.selectBandColor("green",2);
    expect(element(by.id("resistanceMessage")).getText()).toEqual("Resistance:");
  });

  it('should not display resistance if only four band colors chosen', function() {
    calculatorPage.selectBandColor("grey",0);
    calculatorPage.selectBandColor("blue",1);
    calculatorPage.selectBandColor("green",2);
    calculatorPage.selectBandColor("blue",3);
    expect(element(by.id("resistanceMessage")).getText()).toEqual("Resistance:");
  });

  it('should display resistance if all band colors chosen', function() {
    calculatorPage.selectBandColor("grey",0);
    calculatorPage.selectBandColor("blue",1);
    calculatorPage.selectBandColor("green",2);
    calculatorPage.selectBandColor("blue",3);
    calculatorPage.selectBandColor("violet",4);
    expect(element(by.id("resistanceMessage")).getText()).toEqual("Resistance: 865M +/- 0.1%");
  });


  });
