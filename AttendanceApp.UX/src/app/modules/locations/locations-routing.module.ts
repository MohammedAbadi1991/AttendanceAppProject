import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './components/location-list/location-list.component';
import { NewLocationComponent } from './components/new-location/new-location.component';


const routes: Routes = [
  { path: '', component: LocationListComponent },
  { path: 'new-location', component: NewLocationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
