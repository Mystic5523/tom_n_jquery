import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MarkerComponent } from './marker/marker.component';
import { GOOGLE_MAPS_PROVIDER } from './map.providers';
import { GoogleMapsService } from './google-maps.service';

@NgModule({
  declarations: [
    MapComponent,
    MarkerComponent
  ],
  exports: [
    MapComponent,
    MarkerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GOOGLE_MAPS_PROVIDER,
    GoogleMapsService
  ]
})
export class MapModule {
  constructor(@Optional() @SkipSelf() parentModule: MapModule) {
    if (parentModule) {
      throw new Error('MapModule is already loaded. Import once in AppModule.');
    }
  }
}
