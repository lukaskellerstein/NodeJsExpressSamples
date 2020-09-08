

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

var searchValue = 8;
var arr = [
    8,
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
];


// FOR
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchValue) console.log("Value found - for");
}

// FOREACH
for (var item in arr) {
    if (item == searchValue) console.log("Value found - foreach");
}