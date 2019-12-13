import { Observable, of } from 'rxjs';

//--------------------
// We have type-check !!! library already contains .d.ts
//--------------------

const doSomething = (): Observable<any> => {
    return of("aaa").pipe(5);
}
