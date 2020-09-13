import { inject, TestBed } from '@angular/core/testing';
import { GoogleMapsService } from './google-maps.service';
import { GOOGLE_MAP } from './map.providers';
import { googleMock } from './testing/fake-google';
import { Coordinate, MarkerAnimation } from './map-types';
import { ElementRef } from '@angular/core';

describe('GoogleMapsService', () => {
  let googleMockSpy: jasmine.Spy;
  let service: GoogleMapsService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GoogleMapsService,
      { provide: GOOGLE_MAP, useValue: googleMock }
    ]
  }));

  beforeEach(inject([GoogleMapsService], (gms: GoogleMapsService) => {
    service = gms;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when creating the map', () => {

    beforeEach(inject([GoogleMapsService], (gms: GoogleMapsService) => {
      service = gms;
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Map');
    }));

    it('should create the map with controls disabled', () => {
      const center: Coordinate = {lat: 0, lng: 0};
      const zoom = 0;

      service.createMap({} as ElementRef, center, zoom);
      expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }));
    });

    it('should create the map using cooperative gesturehandling', () => {
      const center: Coordinate = {lat: 0, lng: 0};
      const zoom = 0;

      service.createMap({} as ElementRef, center, zoom);
      expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({
        gestureHandling: 'cooperative'
      }));
    });

    it('should create the map with specified center coordinates', () => {
      const center: Coordinate = {lat: 42, lng: 24};
      const zoom = 0;

      service.createMap({} as ElementRef, center, zoom);
      expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({
        center: {
          lat: center.lat,
          lng: center.lng
        },
      }));
    });

    it('should create the map with specified zoom', () => {
      const center: Coordinate = {lat: 0, lng: 0};
      const zoom = 10000;

      service.createMap({} as ElementRef, center, zoom);
      expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({zoom}));
    });

    it('should throw if the ElementRef is null', () => {
      const center: Coordinate = {lat: 0, lng: 0};
      const zoom = 0;

      expect(() => service.createMap(null, center, zoom)).toThrowError('Cannot create map with missing parameters');
      expect(googleMockSpy).not.toHaveBeenCalled();
    });

    it('should throw if the coordinate is null', () => {
      const zoom = 0;

      expect(() => service.createMap({} as ElementRef, null, zoom)).toThrowError('Cannot create map with missing parameters');
      expect(googleMockSpy).not.toHaveBeenCalled();
    });

    it('should throw if the zoom is null', () => {
      const center: Coordinate = {lat: 0, lng: 0};

      expect(() => service.createMap({} as ElementRef, center, null)).toThrowError('Cannot create map with missing parameters');
      expect(googleMockSpy).not.toHaveBeenCalled();
    });

    it('should throw if the ElementRef is undefined', () => {
      const center: Coordinate = {lat: 0, lng: 0};
      const zoom = 0;

      expect(() => service.createMap(undefined, center, zoom)).toThrowError('Cannot create map with missing parameters');
      expect(googleMockSpy).not.toHaveBeenCalled();
    });

    it('should throw if the coordinate is undefined', () => {
      const zoom = 0;

      expect(() => service.createMap({} as ElementRef, undefined, zoom)).toThrowError('Cannot create map with missing parameters');
      expect(googleMockSpy).not.toHaveBeenCalled();
    });

    it('should throw if the zoom is undefined', () => {
      const center: Coordinate = {lat: 0, lng: 0};

      expect(() => service.createMap({} as ElementRef, center, undefined)).toThrowError('Cannot create map with missing parameters');
      expect(googleMockSpy).not.toHaveBeenCalled();
    });

    it('should create the map with MAX numeric values', () => {
      const center: Coordinate = {lat: Number.MAX_VALUE, lng: Number.MAX_VALUE};
      const zoom = Number.MAX_VALUE;

      service.createMap({} as ElementRef, center, zoom);
      expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({
        center: {
          lat: center.lat,
          lng: center.lng
        },
        zoom
      }));
    });

    it('should create the map with MIN numeric values', () => {
      const center: Coordinate = {lat: Number.MIN_VALUE, lng: Number.MIN_VALUE};
      const zoom = Number.MIN_VALUE;

      service.createMap({} as ElementRef, center, zoom);
      expect(googleMockSpy).toHaveBeenCalledWith(undefined, jasmine.objectContaining({
        center: {
          lat: center.lat,
          lng: center.lng
        },
        zoom
      }));
    });
  });

  describe('when adding markers', () => {

    it('should add a marker to the specified position', () => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = {lat: 42, lng: 24};
      const animation: MarkerAnimation = 'DROP';

      service.addMarker(position, animation);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({
        position: {
          lat: position.lat,
          lng: position.lng
        }
      }));
    });

    it('should throw if position is null', () => {
      expect(() => service.addMarker(null, 'DROP')).toThrowError('Cannot create map marker with missing parameters');
    });

    it('should add a marker with BOUNCE animation', () => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = {lat: 0, lng: 0};
      const animation: MarkerAnimation = 'BOUNCE';

      service.addMarker(position, animation);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({animation: 'FAKE-BOUNCE'}));
    });

    it('should add a marker with DROP animation', () => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = {lat: 0, lng: 0};
      const animation: MarkerAnimation = 'DROP';

      service.addMarker(position, animation);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({animation: 'FAKE-DROP'}));
    });

    it('should add a marker with null animation', () => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      googleMockSpy = spyOn(fakeGoogle.maps, 'Marker').and.callThrough();

      const position: Coordinate = {lat: 0, lng: 0};

      service.addMarker(position, null);
      expect(googleMockSpy).toHaveBeenCalledWith(jasmine.objectContaining({animation: null}));
    });

    it('should set marker to the map', () => {
      const fakeGoogle = TestBed.get(GOOGLE_MAP);
      const fakeMarker = jasmine.createSpyObj('marker', ['setMap']);
      const markerSpy = spyOn(fakeGoogle.maps, 'Marker').and.returnValue(fakeMarker);
      spyOn(fakeGoogle.maps, 'Map').and.returnValue({});

      const position: Coordinate = {lat: 0, lng: 0};
      const animation: MarkerAnimation = 'DROP';

      service.createMap({} as ElementRef, {lat: 0, lng: 0}, 0);
      service.addMarker(position, animation);
      expect(markerSpy).toHaveBeenCalledWith(jasmine.objectContaining({map: {}}));
      expect(fakeMarker.setMap).toHaveBeenCalled();
    });
  });
});
