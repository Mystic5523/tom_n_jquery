import { Component, Input, OnInit } from '@angular/core';
import { Coordinate, MarkerAnimation } from '../map-types';
import { GoogleMapsService } from '../google-maps.service';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {
  @Input() public position: Coordinate;
  @Input() public animation: MarkerAnimation;
  constructor(private mapService: GoogleMapsService) { }

  public ngOnInit(): void {
    this.mapService.addMarker(this.position, this.animation);
  }
}
