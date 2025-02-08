// ----------------------------------
// ----------------------------------
// SELECTION SORT
//
// https://www.geeksforgeeks.org/selection-sort-algorithm-2/
// ----------------------------------
// ----------------------------------

function selectionSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the minimum is the first element
    let minIndex = i;

    // Find the minimum element in the rest of the array
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

// ----------------------------------
// TEST
// ----------------------------------

let arr = [5, 46, 34, 2, 6, 14, 9, 7, 50, 22];

console.log(arr);

selectionSort(arr);

console.log(arr);
