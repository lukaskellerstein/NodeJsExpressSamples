
// ----------------------------------------
// Exercise 1 
// ----------------------------------------

const mapPromise = (originPromise, transformFn) => {
    return originPromise
        .then(value => {
            return new Promise((resolve, reject) => {
                try {
                    let result = transformFn(value);
                    resolve(result);
                }
                catch (ex) {
                    reject(ex);
                }
            })
        })
        .catch(error => Promise.reject(error))
}

// If the first promise rejects with an error, the new promise rejects with that error.
mapPromise(Promise.reject("SOME ERROR"), (value) => value + " CHANGED").catch(err => console.log(err));

// If the first promise resolves with a result, it calls the transformer with the value as an argument.
// If the transformer returns with a value, the new promise resolves with that value.
mapPromise(Promise.resolve("SOME RESULT"), (value) => value + " CHANGED").then(value => console.log(value));

// If the transformer throws an error, the new promise rejects with that error.
mapPromise(Promise.resolve("SOME RESULT"), (value) => {
    throw new Error("SOME ERROR IN TRANSFORM FCE")
}).catch(err => console.log(err.message));
