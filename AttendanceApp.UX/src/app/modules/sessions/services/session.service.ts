import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SessionModel } from '../mdoels/session.model';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/api/api.service';
import { Subscription, Observable } from 'rxjs';
import { APIResponseModel } from 'src/app/shared/api/api-response';
import { StudentModel } from '../mdoels/student.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  baseServiceUrl = `${environment.baseAPIUrl}/session/`;
  subscription: Subscription;

  constructor(private apiService: ApiService) {
  }

  getAllSessions() {
    const url = this.baseServiceUrl + 'all';
    return this.apiService.getRequest(url).pipe(map(response => {
      return response.results; // Return SessionModel[]
    }));
  }

  getSessionById(id: number): Observable<SessionModel> {

    const url = this.baseServiceUrl + id;
    return this.apiService.getRequest(url).pipe(map(response => {
      return response.results; // Return One Session
    }));
  }

  addNewSession(locationId: number, sessionDate: Date): Observable<APIResponseModel<any>> {
    const url = this.baseServiceUrl;
    return this.apiService.postRequest(url, { locationId, sessionDate });
  }

  registerStudentToSession(sessionId: number, student: StudentModel) {
    const url = this.baseServiceUrl + 'RegisterStudent';
    return this.apiService.postRequest(url, { sessionId, student });
  }

  searchForStudent(phoneNumber: string) {
    const url = this.baseServiceUrl + 'GetStudentByPhone?phoneNumber=' + phoneNumber;
    return this.apiService.getRequest(url);
  }
}
