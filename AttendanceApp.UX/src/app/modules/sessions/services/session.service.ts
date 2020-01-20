import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SessionModel } from '../mdoels/session.model';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  baseServiceUrl = `${environment.baseAPIUrl}/session/`;
  constructor(private apiService: ApiService) {
  }

  getAllSessions() {
    const url = this.baseServiceUrl + 'all';
    return this.apiService.getRequest(url).pipe(map(response => {
      return response.results; // Return SessionModel[]
    }));
  }

  getSessionById(id: number) {

    const url = this.baseServiceUrl + id;
    return this.apiService.getRequest(url).pipe(map(response => {
      return response.results; // Return One Session
    }));
  }

  addNewSession(locationId: number, sessionDate: Date) {

    const url = this.baseServiceUrl;
    this.apiService.postRequest(url, { locationId, sessionDate }).subscribe(response => {
      // console.log(response);
    });
  }
}
