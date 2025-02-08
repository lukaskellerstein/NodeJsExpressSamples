// ----------------------------------
// ----------------------------------
// MERGE SORT
// divide and conquer algorithm.
// Default sort() in JavaScript uses merge sort by Mozilla Firefox and Safari
//
// Time complexity: O(n log n)
//
// https://www.geeksforgeeks.org/merge-sort/
// ----------------------------------
// ----------------------------------

// helper function for merging two arrays
const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return [...result, ...left, ...right];
};

let arr1 = [2, 5, 10, 57];
let arr2 = [9, 12, 13];
console.log(merge(arr1, arr2));

// SORT FUNCTION
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let midpoint = Math.floor(arr.length / 2);

  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);

  let leftOrdered = mergeSort(left);
  let rightOrdered = mergeSort(right);

  return merge(leftOrdered, rightOrdered);
};

// ----------------------------------
// TEST
// ----------------------------------

let arr = [5, 46, 34, 2, 6, 14, 9, 7, 50, 22];

console.log(arr);

mergeSort(arr);

console.log(arr);
