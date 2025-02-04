// ----------------------------------
// ----------------------------------
// ARRAY - In JavaScript, arrays can grow dynamically. Don't mix with .NET Array
// ----------------------------------
// ----------------------------------
var arr1 = ["aaa", "bbb", "ccc"];

// Access by index - O(1)
var someItem = arr1[2];

// Access by key (dictionary-style)
// not possible

// ----------------------------------
// CRUD OPERATIONS
// ----------------------------------

// Add (to the end) - O(1) or O(n) - if you reach the size of the datastructure and it has to be scaled
arr1.push("ddd");

// Insert (at index)
// not possible

// Remove - O(n)
// slice is O(N) where N is end - start. Not a tremendous amount of optimization opportunity here without significantly slowing down writes to both arrays.
arr1.slice(0, 1);
// splice is, worst case, O(N). There are array storage techniques that divide N by a constant but they significantly slow down indexing. If an engine uses such techniques you might notice unusually slow operations as it switches between storage techniques triggered by access pattern changes.
arr1.splice(2, 1);

// Update - O(1)
arr1[2] = "eee";

// ----------------------------------
// SORT
// ----------------------------------

// sort. It is, in the average case, O(N log N).
// However, depending on the algorithm chosen by the engine, you could get O(N^2) in some cases.
// For example, if the engine uses QuickSort (even with an late out to InsertionSort), it has well-known N^2 cases.
var result = arr1.sort();

// ----------------------------------
// SEARCH
// ----------------------------------

//1 - For-each - Brute-force - O(n)
var result = "";
arr1.forEach((item) => {
  if (item == "ddd") {
    result = item;
  }
});

//2 - Find - O(n)
var aaa = arr1.find((x) => x === "ddd");

//3 - Filter - O(n)
var bbb = arr1.filter((x) => x === "ddd");
