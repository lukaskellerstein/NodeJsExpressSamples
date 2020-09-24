

// ---------------------------------------------------
// BASED on Callbacks
//
// DOESN'T WORK FOR NODE.JS, only for browser
// ---------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json));

let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/posts/1');
xhr.send();

xhr.onload = function () {
    console.log(xhr.response);
};