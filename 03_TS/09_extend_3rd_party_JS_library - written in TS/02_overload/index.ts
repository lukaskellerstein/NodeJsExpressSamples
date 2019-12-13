import '@angular/common/http';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

declare module '@angular/common/http/http' {
	interface HttpClient {
		get(url: string, options: { params: RequestContext }): Observable<any>;

		get<T>(url: string, options: { params: RequestContext }): Observable<T | any>;
	}

	interface RequestContext {
		/**
		 * Defines whether an error should be handled
		 * @param {HttpErrorResponse} error Server response
		 * @returns {boolean} Should Interceptor handle an error? true - yes, false - no
		 */
		shouldHandleError?: (error: HttpErrorResponse) => boolean;
	}
}
