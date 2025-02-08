// ----------------------------------
// ----------------------------------
// INTERPOLATION SEARCH
//
// Time complexity: O(log log n)
//
// SORTED Array/List !!!!
//
// https://www.geeksforgeeks.org/interpolation-search/
// ----------------------------------
// ----------------------------------

// --------------------------------------------
// RECURSIVE VERSION
// --------------------------------------------
function interpolationSearch(arrayToSearch, valueToSearch, low, high) {
  if (
    low <= high &&
    valueToSearch >= arrayToSearch[low] &&
    valueToSearch <= arrayToSearch[high]
  ) {
    // Handle division by zero
    if (arrayToSearch[high] === arrayToSearch[low]) {
      if (arrayToSearch[low] === valueToSearch) {
        return low;
      }
      return -1;
    }

    // Calculate position using interpolation formula
    var delta =
      (valueToSearch - arrayToSearch[low]) /
      (arrayToSearch[high] - arrayToSearch[low]);
    var position = low + Math.floor((high - low) * delta);

    // Check if the value is at the estimated position
    if (arrayToSearch[position] === valueToSearch) {
      return position;
    }

    // Recur for the appropriate section of the array
    if (arrayToSearch[position] < valueToSearch) {
      return interpolationSearch(
        arrayToSearch,
        valueToSearch,
        position + 1,
        high
      );
    } else {
      return interpolationSearch(
        arrayToSearch,
        valueToSearch,
        low,
        position - 1
      );
    }
  }

  return -1;
}

// ----------------------------------
// ----------------------------------
// TEST CODE
var searchValue = 22;
let arr = [2, 5, 6, 7, 9, 14, 22, 34, 46, 50];
var length = arr.length;
var low = 0;
var high = length - 1;
console.log(
  "Found at position :" + interpolationSearch(arr, searchValue, low, high)
);
