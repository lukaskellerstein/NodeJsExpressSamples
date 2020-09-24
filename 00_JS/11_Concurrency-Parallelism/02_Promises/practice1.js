// ------------------------------------------
// 1 - create a promise that will resolve with the value 3.
// ------------------------------------------
const prom1 = new Promise((resolve) => resolve(3));
prom1.then(x => console.log(x));

// ------------------------------------------
// 2 - create a promise that will reject with the string "Boo!"
// ------------------------------------------
const prom2 = new Promise((_, reject) => reject("Boo!"));
prom2.then(
    x => console.log(x),
    reason => console.error(reason)
);

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
    return new Promise((resolve, reject) => {
        if (itShouldResolve) resolve("RESOLVED")
        else reject("REJECTED")
    })
}

makePromiseWithConstructor(true)
    .then(
        x => console.log(x),
        reason => console.error(reason)
    );
makePromiseWithConstructor(false)
    .then(
        x => console.log(x),
        reason => console.error(reason)
    );


/*
This is a common use of the Promise constructor. 
If you want to simulate waiting for a value, a common technique 
is to create a function like the following. 

It simply accepts a value, and a delayInMs, 
then returns a promise that will resolve with that value 
after that delay.
*/

const createAPromise = (value, delayInMs) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delayInMs);
    })
}

createAPromise(10, 2000).then(x => console.log(x));
createAPromise(1, 1000).then(x => console.log(x));
createAPromise(100, 3000).then(x => console.log(x));