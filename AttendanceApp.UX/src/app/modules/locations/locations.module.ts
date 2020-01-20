import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { NewLocationComponent } from './components/new-location/new-location.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationService } from './services/locations.service';


@NgModule({
  declarations: [NewLocationComponent, LocationListComponent],
  imports: [
    CommonModule,
    SharedModule,
    LocationsRoutingModule
  ],
  providers: [LocationService]
})
export class LocationsModule {

  constructor() {
  }

}
