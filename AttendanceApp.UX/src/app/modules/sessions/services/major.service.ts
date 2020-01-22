import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SessionModel } from '../mdoels/session.model';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/api/api.service';
import { Subscription, Observable } from 'rxjs';
import { APIResponseModel } from 'src/app/shared/api/api-response';
import { StudentModel } from '../mdoels/student.model';
import { MajorModel } from '../mdoels/major.model';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  baseServiceUrl = `${environment.baseAPIUrl}/major/`;
  subscription: Subscription;

  constructor(private apiService: ApiService) {
  }

  getAllMajors(): Observable<MajorModel[]> {
    const url = this.baseServiceUrl + 'all';
    return this.apiService.getRequest(url).pipe(map(response => {
      return response.results;
    }));
  }
}
