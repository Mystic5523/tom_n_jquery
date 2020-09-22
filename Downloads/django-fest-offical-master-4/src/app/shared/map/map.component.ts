import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Coordinate } from './map-types';
import { MarkerComponent } from './marker/marker.component';
import { GoogleMapsService } from './google-maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: true }) public mapEl: ElementRef;
  @Input() public defaultZoom: number;
  @Input() public defaultPosition: Coordinate;
  @ContentChildren(MarkerComponent) private markers: QueryList<MarkerComponent>;

  constructor(private mapService: GoogleMapsService) { }

  public ngOnInit(): void {
    this.mapService.createMap(this.mapEl, this.defaultPosition, this.defaultZoom);
  }
}
