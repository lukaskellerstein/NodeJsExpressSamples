// ------------------------------------------
// 1 - create a promise that will resolve with the value 3.
// ------------------------------------------

// variant 1
const ex1 = new Promise((resolve, reject) => {
    resolve(3)
})
    .then(value => console.log(value));

// variant 2
new Promise((resolve, reject) => {
    resolve(3)
})
    .then(value => console.log(value));

// variant 1,2 - shorter
new Promise(resolve => resolve(3))
    .then(value => console.log(value));

// variant 3
Promise.resolve(3)
    .then(value => console.log(value));

// ------------------------------------------
// 2 - create a promise that will reject with the string "Boo!"
// ------------------------------------------

Promise.reject("Boo!")
    .catch(error => console.log(error));


// ------------------------------------------
// 3
//
/*
You have the outline of a function makePromiseWithConstructor(itShouldResolve)

Use the Promise constructor to create a promise that will:

- resolve if itShouldResolve is truthy
- reject if itShouldResolve is falsy
*/
// ------------------------------------------

const makePromiseWithConstructor = (itShouldResolve) => {

    if (itShouldResolve) {
        return Promise.resolve("RESOLVED");
    }

    if (!itShouldResolve) {
        return Promise.reject("REJECTED");
    }
}

makePromiseWithConstructor(true).then(value => console.log(value));

makePromiseWithConstructor(false).catch(error => console.log(error));


// ------------------------------------------
// 4 - Create a method which simulate waiting for a value
// ------------------------------------------

const simulateHttp = (value, delayInMs) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), delayInMs);
    })
}

simulateHttp("val1", 3000).then(val => console.log(val));
simulateHttp("val2", 2000).then(val => console.log(val));
simulateHttp("val3", 1000).then(val => console.log(val));