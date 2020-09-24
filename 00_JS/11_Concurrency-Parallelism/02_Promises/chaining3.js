
const fetch = require("node-fetch");

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
// PARALLEL CHAINING
//
// one by multiple
//--------------------------------

const f1 = addAsync(1, 2);
const f2 = addAsync(3, 4);

Promise.all([f1, f2])
    .then(res => {
        console.log('Array of results', res)
    })
    .catch(err => {
        console.error(err)
    })