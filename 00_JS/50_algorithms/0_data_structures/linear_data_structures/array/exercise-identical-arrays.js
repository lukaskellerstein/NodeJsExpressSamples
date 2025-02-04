// ----------------------------------
// Are the two arrays the same?
// ----------------------------------
const areSame = (arr1, arr2) => {
  // Check lengths first
  if (arr1.length !== arr2.length) return false;

  // Compare each element in both arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false; // Early exit on mismatch
  }

  // Arrays are the same if no mismatches were found
  return true;
};

var arr1 = ["aaa", "bbb", "ccc", "ddd", "eee"];
var arr2 = ["aaa", "bbb", "ccc", "ddd", "eee"];
var arr3 = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];

console.log(areSame(arr1, arr2));
console.log(areSame(arr1, arr3));
