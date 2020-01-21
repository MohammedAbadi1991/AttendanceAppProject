import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../../services/locations.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocationModel } from '../../models/location.model';
import { Subscription } from 'rxjs';
import { APIResponseModel } from 'src/app/shared/api/api-response';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  dataSource: LocationModel[];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private service: LocationService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.service.getAllLocations().subscribe(
      locations => {
        this.dataSource = locations;
      }, (error: APIResponseModel<any>) => {
        console.log(error.message);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddNew() {
    this.router.navigate(['../../locations/new-location']);
  }

}
