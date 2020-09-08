

const interpolationSearch = (arr, searchValue, fromIndex, toIndex) => {

    if (fromIndex < toIndex &&
        searchValue >= arr[fromIndex] &&
        searchValue <= arr[toIndex]) {

        let delta = (searchValue - arr[fromIndex]) / (arr[toIndex] - arr[fromIndex]);
        let position = fromIndex + Math.floor((toIndex - fromIndex) * delta)

        if (arr[position] === searchValue) return position;

        if (searchValue < arr[position]) {
            low = position + 1;
        } else {
            high = position - 1;
        }

        return interpolationSearch(arr, searchValue, low, high);

    }

    return -1;
}


// ----------------------------------
// ----------------------------------
// TEST CODE
var arrayToSearch = [2, 6, 8, 12, 14, 16, 20, 24, 26, 28, 30, 31, 35];
var low = 0;
var high = arrayToSearch.length - 1;
console.log("Found at position :" + interpolationSearch(arrayToSearch, 2, low, high));
console.log("Found at position :" + interpolationSearch(arrayToSearch, 12, low, high));
console.log("Found at position :" + interpolationSearch(arrayToSearch, 35, low, high));
console.log("Found at position :" + interpolationSearch(arrayToSearch, 44444, low, high));

