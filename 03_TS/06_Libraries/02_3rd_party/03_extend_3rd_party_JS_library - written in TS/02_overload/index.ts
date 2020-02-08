import '@angular/common/http';

import { Observable } from 'rxjs';

declare module "@angular/common/http/http" {
  interface HttpClient {
    get(url: string, options: { params: MyParams }): Observable<any>;

    get<T>(url: string, options: { params: MyParams }): Observable<T | any>;
  }

  interface MyParams {
    value: string;
    someFunction?: (param: string) => string;
  }
}
