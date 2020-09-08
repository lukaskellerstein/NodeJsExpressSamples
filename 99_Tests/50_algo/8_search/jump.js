
const jumpSearch = (arr, searchedValue) => {

    let length = arr.length;
    let step = Math.floor(Math.sqrt(length));

    let lowerBound = 0;

    while (arr[Math.min(step, length) - 1] < searchedValue) {
        lowerBound = step;
        step += step;
        if (lowerBound >= length) {
            return -1;
        }
    }

    let upperBound = Math.min(step, length);

    while (arr[lowerBound] < searchedValue) {
        lowerBound++;
        if (lowerBound === upperBound) {
            return -1;
        }
    }

    if (arr[lowerBound] === searchedValue)
        return lowerBound;
    else
        return -1;
}

// ----------------------------------
// ----------------------------------
// TEST CODE
var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];

// console.log("Found at position :" + jumpSearch(arrayToSearch, 2));
// console.log("Found at position :" + jumpSearch(arrayToSearch, 144));
// console.log("Found at position :" + jumpSearch(arrayToSearch, 256));
console.log("Found at position :" + jumpSearch(arrayToSearch, 500));