
// ---------------------------------------
// Very simple promise
// ---------------------------------------

// declaration
let myFirstPromise = url => new Promise((resolve, reject) => {
    if (url === "url-working") {
        resolve([{
            "id": "kljreoiuroej",
            "name": "Product1"
        },
        {
            "id": "cvxvxcv",
            "name": "Product2"
        }])
    } else if (url === "url-reject") {
        reject("Some reason to reject");
    } else if (url === "url-reject-error") {
        reject(Error("Some error for reject"));
    } else if (url === "url-error") {
        throw Error("Some error");
    }
});

// initialization
myFirstPromise("url-reject-error")
    .then(
        (value) => {
            console.log("Promise resolved with value: ", value);
            return value;
        },
        // (reason) => {
        //     console.log("Promise was rejected with reason: ", reason);
        // }
    )
    .catch(err => console.error(err))
    .finally((info) => console.log("All done", info));