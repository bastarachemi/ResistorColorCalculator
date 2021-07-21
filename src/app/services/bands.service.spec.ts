import { TestBed, inject } from '@angular/core/testing';

import { BandsService } from './bands.service';

describe('BandsService', () => {
  let bandsService: BandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandsService]
    });
  });

  beforeEach(inject([BandsService], (service: BandsService) => {
    bandsService = service;
  }));

  it('should be created', () => {
    expect(bandsService).toBeTruthy();
  });

  it('should have empty bands when first created', () => {
    expect(bandsService.getBands()[0]).toEqual("");
    expect(bandsService.getBands()[1]).toEqual("");
    expect(bandsService.getBands()[2]).toEqual("");
    expect(bandsService.getBands()[3]).toEqual("");
    expect(bandsService.getBands()[4]).toEqual("");
  });

  it('should add one color band', () => {
    bandsService.addBand("blue", 0);
    let results = bandsService.getBands();
    expect(results.length).toEqual(5);
    expect(results[0]).toEqual("blue");
  });

  it('should add several color bands', () => {
    bandsService.addBand("blue", 0);
    bandsService.addBand("red", 1);
    bandsService.addBand("violet", 3);
    let results = bandsService.getBands();
    expect(results.length).toEqual(5);
    expect(results[0]).toEqual("blue");
    expect(results[1]).toEqual("red");
    expect(results[3]).toEqual("violet");
  });

  it('should not allow null colors', () => {
    expect(() => bandsService.addBand(null, 0))
      .toThrowError();
  });

  it('should clear all bands', () => {
    bandsService.addBand("blue", 0);
    bandsService.addBand("red", 1);
    bandsService.addBand("violet", 3);
    bandsService.clear();
    let results = bandsService.getBands();
    expect(results.length).toEqual(5);
    expect(results[0]).toEqual("");
    expect(results[1]).toEqual("");
    expect(results[3]).toEqual("");
    expect(bandsService.getCalculatedResistance()).toEqual("");
  });

  it('should calculate the resistance', () => {
    bandsService.addBand("grey", 0);
    bandsService.addBand("blue", 1);
    bandsService.addBand("green", 2);
    bandsService.addBand("blue", 3);
    bandsService.addBand("violet", 4);
    expect(bandsService.getCalculatedResistance()).toEqual("865M +/- 0.1%");
  });

  it('should not calculate the resistance if any bands empty', () => {
    bandsService.addBand("grey", 0);
    bandsService.addBand("blue", 1);
    bandsService.addBand("green", 2);
    bandsService.addBand("violet", 4);
    expect(bandsService.getCalculatedResistance()).toEqual("");
  });
});
