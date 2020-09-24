const fetch = require('node-fetch');


// --------------------------------------------------------------------------
// Pure Promises approach
// --------------------------------------------------------------------------
const myFetch = (id) => {
    if (id === 9999999) return Promise.reject("Invalid Id");
    else return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(
            (resp) => resp.json(),
        );
}

const getProducts = (ids) => new Promise((resolve, reject) => {

    let idsCalls = [];
    for (const id of ids) {
        idsCalls.push(myFetch(id));
    }

    Promise.all(idsCalls)
        .then(
            (data) => resolve(data),
            (reason) => reject(reason)
        );
})

getProducts([1, 2, 3, 4, 5])
    .then(
        (data) => console.log(data),
        (reason) => console.error(`Error: ${reason}`)
    );

