// ----------------------------------
// ----------------------------------
// QUICK SORT
// divide and conquer algorithm
//
// Time complexity: O(n log n)
//
// https://www.geeksforgeeks.org/quick-sort/
// https://www.digitalocean.com/community/tutorials/js-quick-sort
// ----------------------------------
// ----------------------------------

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

const partition = (arr, left, right) => {
  let midpoint = Math.floor((right + left) / 2);
  let pivot = arr[midpoint];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
};

function quickSort(arr, left, right) {
  if (left < right) {
    let index = partition(arr, left, right);

    // Recursively sort the left and right partitions
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
  }

  return arr;
}

// ----------------------------------
// TEST
// ----------------------------------

let arr = [5, 46, 34, 2, 6, 14, 9, 7, 50, 22];

console.log("Unsorted Array:", arr);

let result = quickSort(arr, 0, arr.length - 1);

console.log("Sorted Array:", result);
