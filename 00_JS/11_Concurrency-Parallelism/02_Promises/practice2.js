
// ----------------------------------------
// Exercise 1 - solution (custom function)
// ----------------------------------------

const mapPromise = (originalPromise, mapFce) => {
    const aa = originalPromise.then(x => mapFce(x));
    return Promise.resolve(aa);
}

const originPromise = new Promise((resolve) => resolve(55));
mapPromise(originPromise, x => x * 2)
    .then(x => console.log(x));


// ----------------------------------------
// Exercise 1 - solution (existing operators)
// ----------------------------------------
Promise.resolve(55)
    .then((x) => x * 2)
    .then(x => console.log(x));;