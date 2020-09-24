
// -----------------------------------------------------------
// Another examples of Promises
//
// Promises are Eager -> will run immediately after constructor is called
// -----------------------------------------------------------


// 0 -----------------------

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function () {
    resolve("Success!")  // Yay! Everything went well!
  }, 250)
})

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage)
});



// 1 ---------------------

// declaration
const wait = time => new Promise((resolve) => setTimeout(resolve, time));

// initialization
wait(3000).then(() => console.log('Hello!')); // 'Hello!'


// 2 ---------------------

var p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {
  res += 2;
  console.log(res);
});

// still gets 4
p.then((res) => console.log(res));



// 3 ---------------------

// original way howto create immediately resolved promise
var p1 = new Promise((resolve) => resolve("foo"));
p1.then((res) => console.log(res));

// improved way howto create immediately resolved promise
var p2 = Promise.resolve("foo");
p2.then((res) => console.log(res));

