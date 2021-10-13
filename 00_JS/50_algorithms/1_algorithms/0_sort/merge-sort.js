
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

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

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
}



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
}

console.log(mergeSort(unsortedArr));