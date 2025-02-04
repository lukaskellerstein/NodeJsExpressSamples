// ----------------------------------
// IS one array a subarray of another array ?
//
// Subarray is a contiguous sequence of elements within an array.
// order matters
// ----------------------------------
function isSubarray(arr1, arr2) {
  // Step 1: Get the lengths of both arrays
  const length1 = arr1.length;
  const length2 = arr2.length;

  // Step 2: Handle edge cases
  if (length1 === 0) {
    // An empty array is considered a subarray of any array
    return true;
  }

  if (length1 > length2) {
    // If arr1 is longer than arr2, it cannot be a subarray
    return false;
  }

  // Step 3: Loop through arr2 to find a potential starting point for arr1
  for (let i = 0; i <= length2 - length1; i++) {
    // Assume arr1 might be a subarray starting from this position
    let isMatch = true;

    // Step 4: Compare each element of arr1 with the corresponding element in arr2
    for (let j = 0; j < length1; j++) {
      if (arr2[i + j] !== arr1[j]) {
        // If any element doesn't match, arr1 is not a subarray at this position
        isMatch = false;
        break;
      }
    }

    // Step 5: If we found a complete match, return true
    if (isMatch) {
      return true;
    }
  }

  // Step 6: If no match was found after checking all positions, return false
  return false;
}

var arr1 = ["ccc", "ddd"];
var arr2 = ["aaa", "bbb", "ccc", "ddd", "eee"];
var arr3 = ["aaa", "bbb", "ccc"];

console.log(isSubarray(arr1, arr2));
console.log(isSubarray(arr1, arr3));
