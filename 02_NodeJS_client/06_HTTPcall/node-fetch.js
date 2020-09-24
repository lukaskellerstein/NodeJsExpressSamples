const fetch = require("node-fetch");


// ---------------------------------------------------
// BASED on Promises
// ---------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json));

// ------------------------------------------------------------
// GET
// ------------------------------------------------------------

// 1 -------------------
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json));

// catch error
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

// intercept error
fetch("https://jsonplaceholder.typicode.com/notreal/")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not reach website.");
        }
        return response.json();
    })
    .then(json => console.log(json))
    .catch(err => console.error(err));

// 2 --------------------
const getData = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};
getData("https://jsonplaceholder.typicode.com/posts/1");



// ------------------------------------------------------------
// POST
// ------------------------------------------------------------
const todo = {
    title: 'Some really important work to finish'
};

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });