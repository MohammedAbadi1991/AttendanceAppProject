import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIResponseModel } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }


  /**
   * Request Used to fetch data from the API
   * @param endpoint String, where the service will be calling to
   */
  public getRequest(endpoint: string): Observable<APIResponseModel<any>> {
    return this.httpGet(endpoint);
  }

  /**
   * Request Used to Add and item.
   * @param endpoint String, where the service will be calling to
   * @param body Object, The body of the post request.
   */
  public postRequest(endpoint: string, body: any): Observable<APIResponseModel<any>> {
    return this.httpPost(endpoint, body);
  }



  /**
   * Request used to update an item.
   * @param endpoint String, where the service will be calling to
   * @param body Object, The body of the put request.
   */
  public putRequest(endpoint: string, body: any): Observable<APIResponseModel<any>> {
    return this.httpPut(endpoint, body);
  }

  /**
   * Request used to delete an item.
   * @param endpoint String, where the service will be calling to
   */
  public deleteRequest(endpoint: string): Observable<APIResponseModel<any>> {
    return this.httpDelete(endpoint);
  }


  public patchRequest(endpoint: string, body: any): Observable<APIResponseModel<any>> {
    return this.httpPatch(endpoint, body);
  }

  private httpDelete(endpoint: string): Observable<APIResponseModel<any>> {
    return this.httpClient.delete<any>(`${endpoint}`).pipe(map(result => {
      return result;
    }));
  }

  private httpPatch(endpoint: string, body: any): Observable<APIResponseModel<any>> {
    return this.httpClient.patch<any>(`${endpoint}`, body).pipe(map(result => {
      return result;
    }));
  }

  private httpPut(endpoint: string, body: any): Observable<APIResponseModel<any>> {
    return this.httpClient.put<any>(`${endpoint}`, body).pipe(map(result => {
      return result;
    }));
  }

  private httpPost(endpoint: string, body: any): Observable<APIResponseModel<any>> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<any>(`${endpoint}`, body, {headers}).pipe(map(result => {
      return result;
    }));
  }

  private httpGet(endpoint: string): Observable<APIResponseModel<any>> {

    return this.httpClient.get<any>(`${endpoint}`).pipe(map(result => {
      return result;
    }));
  }
}
