const { from } = require("rxjs");
const { tap, flatMap } = require('rxjs/operators');
const fetch = require("node-fetch");

let resultA, resultB, resultC;

function addAsync(num1, num2) {
    // use ES6 fetch API, which return a promise
    const promise = fetch(`https://api.mathjs.org/v4/?expr=${num1}%2B${num2}`)
        .then(x => x.text())
        .then(x => {
            console.log(x);
            return x;
        })

    return from(promise);
}

addAsync(1, 2).pipe(
    tap(x => resultA = x),
    flatMap(x => addAsync(x, 3)),
    tap(x => resultB = x),
    flatMap(x => addAsync(x, 4)),
    tap(x => resultC = x))
    .subscribe(x => {
        console.log('total: ' + x)
        console.log(resultA, resultB, resultC)
    });