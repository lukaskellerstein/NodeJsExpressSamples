import { interval } from 'rxjs'
import { map } from 'rxjs/operators';

let value1$ = interval(1000)
.pipe(
    map((value) => {
    return value.toString();
  }));

value1$.subscribe((value) => {
    console.log(value);
})