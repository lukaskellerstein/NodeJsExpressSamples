function main() {

    // Visualization:
    // https://lti.cs.vt.edu/AV/Development/interpolationSearchAV.html

    // original array
    var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];
    console.log(arrayToSearch);

    // sort the array
    let sortedArr = arrayToSearch.sort((a, b) => a - b);
    console.log(sortedArr);

    // -------------------------------------
    // implement here
    const interpolationSearch = (arr, searchValue, fromIndex, toIndex) => {

        if (fromIndex > toIndex) {
            console.log('Non sense 1');
            return -1;
        }
        if (searchValue < arr[fromIndex]) {
            console.log('search value cannot be lower then the lowest value in array');
            return -1;
        }
        if (searchValue > arr[toIndex]) {
            console.log('search value cannot be larger then the biggest value in array');
            return -1;
        }

        let lowestValue = arr[fromIndex];
        let biggestValue = arr[toIndex];

        let delta = (searchValue - lowestValue) / (biggestValue - lowestValue);
        let deltaIndex = fromIndex + Math.floor((toIndex - fromIndex) * delta);
        let deltaValue = arr[deltaIndex];

        if (deltaValue === searchValue) {
            return deltaIndex;
        } else if (searchValue < deltaValue) {
            toIndex = deltaIndex - 1;
        } else if (searchValue > deltaValue) {
            fromIndex = deltaIndex + 1;
        }

        return interpolationSearch(arr, searchValue, fromIndex, toIndex);
    }

    // -------------------------------------
    // TEST data
    var low = 0;
    var high = sortedArr.length - 1;
    console.log("Found at position :" + interpolationSearch(sortedArr, 2, low, high));
    console.log("Found at position :" + interpolationSearch(sortedArr, 12, low, high));
    console.log("Found at position :" + interpolationSearch(sortedArr, 144, low, high));
    console.log("Found at position :" + interpolationSearch(sortedArr, 44444, low, high));

};
main();