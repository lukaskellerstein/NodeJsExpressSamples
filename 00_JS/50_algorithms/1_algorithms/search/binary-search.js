
// ----------------------------------
// ----------------------------------
// BINARY SEARCH 
// divide and conquer algorithm.
//
// Time complexity: O(log n)
//
// SORTED Array/List !!!!
//
// https://www.geeksforgeeks.org/binary-search/
// ----------------------------------
// ----------------------------------

// --------------------------------------------
// RECURSIVE VERSION
// --------------------------------------------
let binarySearch = (arr, x, start, end) => {

    // Base Condition 
    if (start > end) return false;

    // Find the middle index 
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x 
    if (arr[mid] === x) return true;

    // If element at mid is greater than x, 
    // search in the left half of mid 
    if (arr[mid] > x)
        return binarySearch(arr, x, start, mid - 1);
    else

        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return binarySearch(arr, x, mid + 1, end);
}


// ----------------------------------
// ----------------------------------
// TEST CODE
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (binarySearch(arr, x, 0, arr.length - 1))
    console.log("Element found!<br>");
else console.log("Element not found!<br>");

x = 6;

if (binarySearch(arr, x, 0, arr.length - 1))
    console.log("Element found!<br>");
else console.log("Element not found!<br>"); 