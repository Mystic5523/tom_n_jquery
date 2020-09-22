import { FactoryProvider, InjectionToken } from '@angular/core';

export const GOOGLE_MAP = new InjectionToken('google-maps-token');

export const googleMapsFactory = () => {
  return google;
};

export const GOOGLE_MAPS_PROVIDER: FactoryProvider = {
  provide: GOOGLE_MAP,
  useFactory: googleMapsFactory
};
