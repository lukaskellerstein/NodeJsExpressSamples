// ----------------------------------
// ----------------------------------
// INSERTION SORT
// as cards in hand
//
// Default sort() in JavaScript uses insertion sort by V8 Engine of Chrome
// For small arrays (<= 10 elements)
//
// Time complexity: O(n*2)
//
// https://www.geeksforgeeks.org/insertion-sort/
// ----------------------------------
// ----------------------------------

const insertionSort = (arr) => {
  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let leftIndex = i - 1;

    // Shift elements to the right to create a spot for `current`
    while (leftIndex >= 0 && arr[leftIndex] > current) {
      arr[leftIndex + 1] = arr[leftIndex];
      leftIndex--;
    }

    // Insert `current` into its correct position
    arr[leftIndex + 1] = current;
  }
};

// ----------------------------------
// TEST
// ----------------------------------

let arr = [5, 46, 34, 2, 6, 14, 9, 7, 50, 22];

console.log(arr);

insertionSort(arr);

console.log(arr);
