// OBJECT

var obj1 = {
  0: 'aaa',
  1: 'bbb',
  2: 'ccc'
};

console.log(typeof obj1);

// ARRAY

var arr1 = ['aaa', 'bbb', 'ccc'];

console.log(typeof arr1);

// RESULT = Array is object --------------------------
console.log(Array.isArray(obj1));
console.log(Array.isArray(arr1));
