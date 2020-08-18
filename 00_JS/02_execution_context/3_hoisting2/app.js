// 1 -------------------------------------

console.log(a);

var a = 1;
var a = 5;

console.log(a);

// 2 -------------------------------------

console.log(b());

function b() {
  console.log('blabla');
}

function b() {
  console.log('haha');
}

console.log(b());

// 3 -------------------------------------

var favoriteFood = 'sushi';

function foodThoughts() {
  console.log('My favorite food is ' + favoriteFood);

  var favoriteFood = 'steak';

  console.log('My new favorite food is ' + favoriteFood);
}

foodThoughts();

// 4 --------------------------------------

function bigBrother() {
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother());

// 5a - NO ERROR -----------------------------------------------

console.log(sayHello());

function sayHello() {
  function hello() {
    console.log('Hello!');
  }

  hello();

  function hello() {
    console.log('Hey!');
  }
}

// 5b - ERROR -----------------------------------------------

console.log(sayHello2());

var sayHello2 = function() {
  function hello() {
    console.log('Hello!');
  }

  hello();

  function hello() {
    console.log('Hey!');
  }
};
