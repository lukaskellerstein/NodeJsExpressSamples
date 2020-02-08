import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpClient extends HttpClient {
  get(
    url: string,
    options: {
      headers?: HttpHeaders | { [header: string]: string | string[] };
      observe?: "";
      params?: HttpParams | { [param: string]: string | string[] };
      reportProgress?: boolean;
      responseType?: "";
      withCredentials?: boolean;
    }
  ): Observable<any>;

  get<T>(
    url: string,
    options: {
      headers?: HttpHeaders | { [header: string]: string | string[] };
      observe?: "body";
      params?: HttpParams | { [param: string]: string | string[] };
      reportProgress?: boolean;
      responseType?: "json";
      withCredentials?: boolean;
    }
  ): Observable<T | any>;
}
