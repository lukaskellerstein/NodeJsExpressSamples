
const fetch = require("node-fetch");

let resultA, resultB, resultC;

function addAsync(num1, num2) {
    // use ES6 fetch API, which return a promise
    return fetch(`https://api.mathjs.org/v4/?expr=${num1}%2B${num2}`)
        .then(x => x.text())
        .then(x => {
            console.log(x);
            return x;
        });
}

// -------------------------------
// SERIAL CHAINING
//
// one by one
//--------------------------------
addAsync(1, 2)
    .then(success => {
        resultA = success;
        return resultA;
    })
    .then(success => addAsync(success, 3))
    .then(success => {
        resultB = success;
        return resultB;
    })
    .then(success => addAsync(success, 4))
    .then(success => {
        resultC = success;
        return resultC;
    })
    .then(success => {
        console.log('total: ' + success)
        console.log(resultA, resultB, resultC)
    });