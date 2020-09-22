import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { GoogleMapsService } from './google-maps.service';
import { FakeMapService } from './testing/fake-maps.service';
import { Coordinate } from './map-types';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      providers: [
        { provide: GoogleMapsService, useClass: FakeMapService },
      ]
    })
    .compileComponents();
  }));

  describe('when creating a component without input parameters', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(MapComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('when creating the component with input parameters', () => {
    let fakeMapServiceSpy: any;
    const zoom = 15;
    const position: Coordinate = {lat: 42, lng: 24};

    beforeEach(inject([GoogleMapsService], (fakeMapService) => {
      fakeMapServiceSpy = spyOn(fakeMapService, 'createMap');
      fixture = TestBed.createComponent(MapComponent);
      component = fixture.componentInstance;

      component.defaultZoom = zoom;
      component.defaultPosition = position;
      fixture.detectChanges();
    }));

    it('should call the map service with the input parameters', () => {
      expect(fakeMapServiceSpy).toHaveBeenCalledWith(component.mapEl, position, zoom);
    });
  });
});
