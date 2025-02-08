// ----------------------------------
// ----------------------------------
// LINEAR SEARCH
//
// Time complexity: O(n)
//
// Unsorted Array/List
//
// https://www.geeksforgeeks.org/linear-search/
// ----------------------------------
// ----------------------------------

var searchValue = 22;
let arr = [5, 46, 34, 2, 6, 14, 9, 7, 50, 22];

// FOR
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchValue) {
    console.log("Value found");
    break; // Optional: Stops the loop after finding the value
  }
}

// FOREACH
for (var item of arr) {
  if (item === searchValue) {
    console.log("Value found");
    break; // Optional: Stops the loop after finding the value
  }
}
