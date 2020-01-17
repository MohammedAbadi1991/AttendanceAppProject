import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../location.model';
import { LocationService } from '../../locations.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  dataSource: LocationModel[];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private service: LocationService, private router: Router) { }

  ngOnInit() {
    this.service.getAllLocations().subscribe(
      locations => {
        // console.log(locations);
        this.dataSource = locations;
      });
  }

  onAddNew() {
    this.router.navigate(['../../locations/new-location']);
  }

}
