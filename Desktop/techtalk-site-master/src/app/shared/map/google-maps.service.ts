import { ElementRef, Inject, Injectable } from '@angular/core';
import { GOOGLE_MAP } from './map.providers';
import { Coordinate, MarkerAnimation } from './map-types';
import { } from 'googlemaps';

@Injectable()
export class GoogleMapsService {
  private map: google.maps.Map = null;

  constructor(@Inject(GOOGLE_MAP) private google: any) {}

  public createMap(elRef: ElementRef, center: Coordinate, zoom: number): void {
    if (!elRef || !center || zoom === null || zoom === undefined) {
      throw new Error('Cannot create map with missing parameters');
    }

    this.map = new this.google.maps.Map(elRef.nativeElement, {
      zoom,
      center: {
        lat: center.lat,
        lng: center.lng
      },
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      gestureHandling: 'cooperative'
    });
  }

  public addMarker(position: Coordinate, animation: MarkerAnimation): void {
    if (!position) {
      throw new Error('Cannot create map marker with missing parameters');
    }

    const mapMarker: google.maps.Marker = new this.google.maps.Marker({
      position: {
        lat: position.lat,
        lng: position.lng
      },
      animation: this.animationType(animation),
      map: this.map
    });
    mapMarker.setMap(this.map);
  }

  private animationType(animation: MarkerAnimation): google.maps.Animation {
    if (!animation) {
      return null;
    }

    if (animation === 'DROP') {
      return this.google.maps.Animation.DROP;
    } else if (animation === 'BOUNCE') {
      return this.google.maps.Animation.BOUNCE;
    }

    return null;
  }
}
