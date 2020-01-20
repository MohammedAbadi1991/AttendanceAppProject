import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../../../shared/api/api.service';
import { LocationModel } from '../models/location.model';
import { APIResponseModel } from 'src/app/shared/api/api-response';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationService  {

  baseServiceUrl = `${environment.baseAPIUrl}/location/`;
  constructor(private apiService: ApiService) {
  }

  getAllLocations(): Observable<LocationModel[]> {
    const url = this.baseServiceUrl + 'all';
    return this.apiService.getRequest(url).pipe(map(response => {
      return response.results;
    }));

  }

  addNewLocation(name: string) {
    const url = this.baseServiceUrl;
    this.apiService.postRequest(url, {name}).subscribe(response => {
      // return response.results;
    });
  }

}
