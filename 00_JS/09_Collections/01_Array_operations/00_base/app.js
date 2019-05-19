var arr1 = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh'];

// -------------------------------
// C - CREATE
// -------------------------------

// insert
arr1.push('ddd');

// -------------------------------
// R - READ
// -------------------------------

// get index
var findedIndex = arr1.indexOf('iii');

// get item on index
var finded = arr1[2];

// -------------------------------
// U - UPDATE
// -------------------------------

// ??????????????????????????????

// -------------------------------
// D - DELETE
// -------------------------------

// remove first item
var result = arr1.splice(0, 1);

// remove last item
var result = arr1.splice(arr1.length - 1, 1);
// vs.
arr1.pop();

// remove at index
var result = arr1.splice(4, 1);
