// Function expression - arrow function
var result = () => {
  return 'aaa';
};

var result2 = function () {
  return 'aaa';
};

// Function declaration
function doSomething() {
  return 'aaa';
}

function doSomething(text) {
  return text;
}

// Function invocation/call/execution
console.log(result());
console.log(result2());
console.log(doSomething());
console.log(doSomething('bbb'));

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// Arrow function - multiple-level

const aaa = (a, b) => c => {
  console.log('arguments', arguments);
  console.log('this', typeOfGlobalObject(this));

  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
};

aaa('a', 'b')('c');

// =

function aaa2(a, b) {
  return function bbb(c) {
    console.log('arguments', arguments);
    console.log('this', typeOfGlobalObject(this));

    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
  };
}

aaa2('a', 'b')('c');

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// HELPERS
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function typeOfGlobalObject(obj) {
  if (obj.hasOwnProperty('window')) {
    return 'window';
  }

  if (obj.hasOwnProperty('global')) {
    return 'global';
  }

  return obj;
}
