import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationModel } from './location.model';
import { map, tap } from 'rxjs/operators';

export class LocationService implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  getAllLocations() {
    return this.httpClient
      .get<LocationModel[]>('http://localhost:4220/api/location/all');

    // .pipe(
    //   map(response => {
    //     console.log('result: ' + response);
    //     return response;
    //   }),
    //   tap(results => {
    //     console.log(results);
    //   }));
  }

  addNewLocation(name: string) {

    // const postData = {
    //   locationName: locationName
    // };

    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    this.httpClient
      .post('http://localhost:4220/api/location', {name}, { headers: headers }).subscribe(response => {
        // console.log(response);
      });
  }
}
