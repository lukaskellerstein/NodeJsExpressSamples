// -----------------------
// Object
// -----------------------

var obj1 = {
  prop1: 'aaa',
  func1: function() {
    return 'bbb';
  }
};

//can add new property
obj1.prop2 = 'ccc';

console.log(obj1);

// -----------------------
// Function are Objects
// -----------------------

function fce1() {
  let prop1 = 'aaa';
}

//can add new property
fce1.prop2 = 'bbb';

console.log(fce1);

// -----------------------
// Arrays are Objects
// -----------------------

var arr1 = [1, 2, 3];

//can add new property
arr1.prop2 = 'bbb';

console.log(arr1);
