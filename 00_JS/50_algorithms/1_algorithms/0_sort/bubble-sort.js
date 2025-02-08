// ----------------------------------
// ----------------------------------
// BUBBLE SORT
// Simplest one, the most greedy
//
// Time complexity: O(N²)
//
// https://www.geeksforgeeks.org/bubble-sort/
// ----------------------------------
// ----------------------------------

// Nested for-loop (non-optimized) version
const bubbleSort1 = (arr) => {
  let arrLength = arr.length;
  let lastIndex = arr.length - 1;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < lastIndex - i; j++) {
      let currentValue = arr[j];
      let nextValue = arr[j + 1];

      if (currentValue > nextValue) {
        arr[j] = nextValue;
        arr[j + 1] = currentValue;
      }
    }
  }
};

// Iterative (optimized) version
// IMPROVED with 'swapped' variable
function bubbleSort2(arr) {
  let n = arr.length;
  let swapped;

  // Outer loop runs until the array is sorted
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop for each comparison between adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    // If no swaps were made, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// BEST - recursive version
const bubbleSort3 = (arr, n) => {
  // Base case
  if (n == 1) return;

  // One pass of bubble
  // sort. After this pass,
  // the largest element
  // is moved (or bubbled)
  // to end.
  for (let i = 0; i < n - 1; i++)
    if (arr[i] > arr[i + 1]) {
      // swap arr[i], arr[i+1]
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }

  // Largest element is fixed,
  // recur for remaining array
  bubbleSort3(arr, n - 1);
};

// ----------------------------------
// TEST
// ----------------------------------

let arr = [5, 46, 34, 2, 6, 14, 9, 7, 50, 22];

console.log(arr);

// bubbleSort(arr);
// bubbleSort2(arr);
bubbleSort3(arr, arr.length);

console.log(arr);
