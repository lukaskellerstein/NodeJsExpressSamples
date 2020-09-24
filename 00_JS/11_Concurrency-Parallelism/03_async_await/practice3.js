const fetch = require('node-fetch');

// --------------------------------------------------------------------------
// Async/Await approach
// --------------------------------------------------------------------------

const getProducts = async (ids) => {

    let result = [];

    for (const id of ids) {
        result.push(await fetch(`https://fakestoreapi.com/products/${id}`).then(x => x.json()));
    }

    return result;
}

getProducts([1, 2, 3, 4, 5]).then(x => console.log(x));