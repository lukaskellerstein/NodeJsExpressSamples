
// ---------------------------------------------------
// BASED on Promises
//
// DOESN'T WORK FOR NODE.JS, only for browser
// ---------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json));