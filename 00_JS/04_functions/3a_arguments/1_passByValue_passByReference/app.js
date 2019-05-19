// --------------------------------------------------
// Pass by value - Primitives
// --------------------------------------------------
var num1 = 100;

function changeNumber(num) {
  num++;
}

changeNumber(num1);
console.log(num1);

// --------------------------------------------------
// Pass by reference - Objects
// --------------------------------------------------
let obj1 = {
  name: 'Lukas'
};

function changeObject(obj) {
  obj.name = 'Adam';
}

changeObject(obj1);
console.log(obj1);

// --------------------------------------------------
// Pass by reference - Arrays
// --------------------------------------------------
let arr1 = [1, 2, 3];

function changeArray(arr) {
  arr.push(999);
}

changeArray(arr1);
console.log(arr1);

// --------------------------------------------------
// --------------------------------------------------
// EXCEPTION ??????????????????????
// --------------------------------------------------
// --------------------------------------------------
// Pass by value - Functions ???????
// --------------------------------------------------

function fnc1() {
  return 'aaa';
}

function changeFunction(fn) {
  fn = undefined;
  console.log(fn);
}

changeFunction(fnc1);
console.log(fnc1);
