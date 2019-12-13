import { Observable, of } from 'rxjs';


// ----------------------------------------
// MERGING Class and Interface
// ----------------------------------------

type HeadersOptions = {
    headers: string[]
}

type ParamOptions = {
    param: string
}

class HttpClient {
    
    get(url: string, options: HeadersOptions): Observable<string>;
    get(url: string, options?: HeadersOptions): Observable<string>;
    get(url: string, options: ParamOptions): Observable<any>;
    get(url: string, options?: ParamOptions): Observable<any>
    get(url: string, options: HeadersOptions | ParamOptions | null | any): Observable<string> | Observable<any> {
        console.log('url', url);
        console.log('options', options);
        
        return of(null);
    };
    
}


type CustomOptions = {
    someMyParameter: number
}

interface HttpClient {
    get(url: string, options: CustomOptions): Observable<any>;
}



const myClient = new HttpClient();
myClient.get("http://blabla.com", { someMyParameter: 5});