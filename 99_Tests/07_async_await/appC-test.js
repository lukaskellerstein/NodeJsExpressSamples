
// --------------------------------------------------------------------------
// Async/Await approach
// --------------------------------------------------------------------------

const myFetch = (id) => {
    if (id === 9999) return Promise.reject("Invalid Id");
    else return Promise.resolve("DONE");
}

const getProducts = async (ids) => {

    let result = [];

    for (const id of ids) {
        result.push(await myFetch(id));
    }

    return result;
}


// version 1 with catch error in then()
getProducts([1, 2, 9999, 4, 5])
    .then(
        (data) => console.log(data),
        (reason) => console.error(`Error: ${reason}`)
    );

// version 2 with catch error after then()
getProducts([1, 2, 9999, 4, 5])
    .then(val => console.log('Final RESULT - ' + val))
    .catch(err => console.log('Final ERROR - ' + err));



