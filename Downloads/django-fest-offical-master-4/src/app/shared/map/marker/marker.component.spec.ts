import { async, ComponentFixture, inject, TestBed, tick } from '@angular/core/testing';

import { MarkerComponent } from './marker.component';
import { GoogleMapsService } from '../google-maps.service';
import { FakeMapService } from '../testing/fake-maps.service';
import { Coordinate } from '../map-types';

describe('MarkerComponent', () => {
  let component: MarkerComponent;
  let fixture: ComponentFixture<MarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerComponent ],
      providers: [
        { provide: GoogleMapsService, useClass: FakeMapService }
      ]
    })
    .compileComponents();
  }));

  describe('when creating the component without input parameters', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(MarkerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('when creating the component with input parameters', () => {
    let fakeMapServiceSpy: any;
    const position: Coordinate = {lat: 42, lng: 24};
    const animation = 'DROP';

    beforeEach(inject([GoogleMapsService], (fakeMapService) => {
      fakeMapServiceSpy = spyOn(fakeMapService, 'addMarker');
      fixture = TestBed.createComponent(MarkerComponent);
      component = fixture.componentInstance;

      component.animation = animation;
      component.position = position;
      fixture.detectChanges();
    }));

    it('should call the map service with the input parameters', () => {
      expect(fakeMapServiceSpy).toHaveBeenCalledWith(position, animation);
    });
  });
});
