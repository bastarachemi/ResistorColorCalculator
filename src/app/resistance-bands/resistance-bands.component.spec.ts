import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ResistanceBandsComponent } from './resistance-bands.component';
import { BandsService } from '../../services/bands.service';

describe('ResistanceBandsComponent with Real Service', () => {
  let component: ResistanceBandsComponent;
  let fixture: ComponentFixture<ResistanceBandsComponent>;
  let service: BandsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ResistanceBandsComponent ],
      providers: [ BandsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistanceBandsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BandsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty bands when first created', () => {
    expect(component.bands[0]).toEqual("");
    expect(component.bands[1]).toEqual("");
    expect(component.bands[2]).toEqual("");
    expect(component.bands[3]).toEqual("");
    expect(component.bands[4]).toEqual("");
  });

  it('should clear bands', () => {
    component.bands[0] = "blue";
    component.bands[1] = "grey";
    component.bands[2] = "red";
    component.bands[3] = "green";
    component.bands[4] = "violet";
    component.clear();
    expect(component.resistance).toEqual("");
    expect(component.bands[0]).toEqual("");
    expect(component.bands[1]).toEqual("");
    expect(component.bands[2]).toEqual("");
    expect(component.bands[3]).toEqual("");
    expect(component.bands[4]).toEqual("");
  });

  it('should add bands to service after change', () => {
    component.onChange("red",0);
    expect(component.bands[0]).toEqual("red");
    expect(service.getBands()[0]).toEqual("red");
    component.onChange("green",0);
    expect(component.bands[0]).toEqual("green");
    expect(service.getBands()[0]).toEqual("green");
  });

  it('should get resistance if bands all selected', () => {
    expect(component.resistance).toEqual("");
    component.onChange("grey",0);
    component.onChange("blue",1);
    component.onChange("green",2);
    expect(component.resistance).toEqual("");
    component.onChange("blue",3);
    expect(component.resistance).toEqual("");
    component.onChange("violet",4);
    expect(component.resistance).toEqual("865M +/- 0.1%");
    component.onChange("green",4);
    expect(component.resistance).toEqual("865M +/- 0.5%");
  });

});
