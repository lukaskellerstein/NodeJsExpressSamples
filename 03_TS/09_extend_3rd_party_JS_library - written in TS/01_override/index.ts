import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpClient extends HttpClient {
	get(
		url: string,
		options: {
			headers?: HttpHeaders | { [header: string]: string | string[] };
			observe?: '';
			params?: HttpParams | { [param: string]: string | string[] };
			reportProgress?: boolean;
			responseType?: '';
			withCredentials?: boolean;
		}
	): Observable<any>;

	get<T>(
		url: string,
		options: {
			headers?: HttpHeaders | { [header: string]: string | string[] };
			observe?: 'body';
			params?: HttpParams | { [param: string]: string | string[] };
			reportProgress?: boolean;
			responseType?: 'json';
			withCredentials?: boolean;
		}
	): Observable<T | any>;
}

interface RequestContext {
	/**
	 * Defines whether an error should be handled
	 * @param {HttpErrorResponse} error Server response
	 * @returns {boolean} Should Interceptor handle an error? true - yes, false - no
	 */
	shouldHandleError?: (error: HttpErrorResponse) => boolean;
}
