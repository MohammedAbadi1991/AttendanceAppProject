import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/locations.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocationModel } from '../../models/location.model';
import { APIResponseModel } from 'src/app/shared/api/api-response';

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
        this.dataSource = locations;
      },(error:APIResponseModel<any>)=>{
        console.log("error has occured");
      });
  }

  onAddNew() {
    this.router.navigate(['../../locations/new-location']);
  }

}
