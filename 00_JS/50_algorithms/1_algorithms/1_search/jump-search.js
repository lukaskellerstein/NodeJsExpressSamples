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
    var step = Math.floor(Math.sqrt(length));

    var lowerBound = 0;
    while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
        lowerBound = step;
        step += step;
        if (lowerBound >= length) {
            return -1;
        }
    }

    var upperBound = Math.min(step, length);
    while (arrayToSearch[lowerBound] < valueToSearch) {
        lowerBound++;
        if (lowerBound == upperBound) {
            return -1;
        }
    }

    if (arrayToSearch[lowerBound] == valueToSearch) {
        return lowerBound;
    }
    return -1;
}


// ----------------------------------
// ----------------------------------
// TEST CODE
var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];

console.log("Found at position :" + jumpSearch(arrayToSearch, 2));
console.log("Found at position :" + jumpSearch(arrayToSearch, 256));
console.log("Found at position :" + jumpSearch(arrayToSearch, 500));
console.log("Found at position :" + jumpSearch(arrayToSearch, 44444));
