import { ElementRef } from '@angular/core';
import { Coordinate, MarkerAnimation } from '../map-types';

export class FakeMapService {
  public createMap(el: ElementRef, center: Coordinate, zoom: number): void {
  }

  public addMarker(position: Coordinate, animation: MarkerAnimation): void {
  }
}
