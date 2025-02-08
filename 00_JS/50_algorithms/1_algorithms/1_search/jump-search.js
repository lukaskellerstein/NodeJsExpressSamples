// ----------------------------------
// ----------------------------------
// JUMP SEARCH
//
// Time complexity: O(√n)
//
// SORTED Array/List !!!!
//
// https://www.geeksforgeeks.org/jump-search/
// ----------------------------------
// ----------------------------------
function jumpSearch(arrayToSearch, valueToSearch) {
  var length = arrayToSearch.length;
  var stepSize = Math.floor(Math.sqrt(length));

  var lowerBound = 0;
  var step = stepSize;

  // Finding the block where the value might be present
  while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
    lowerBound = step;
    step += stepSize;
    if (lowerBound >= length) {
      return -1;
    }
  }

  // Linear search within the block
  var upperBound = Math.min(step, length);
  while (lowerBound < upperBound && arrayToSearch[lowerBound] < valueToSearch) {
    lowerBound++;
  }

  // Check if the element is found
  if (lowerBound < length && arrayToSearch[lowerBound] === valueToSearch) {
    return lowerBound;
  }

  return -1;
}

// ----------------------------------
// ----------------------------------
// TEST CODE
var searchValue = 22;
let arr = [2, 5, 6, 7, 9, 14, 22, 34, 46, 50];

console.log("Found at position :" + jumpSearch(arr, searchValue));
