function main() {

    // Visualization:
    // https://www.cs.usfca.edu/~galles/visualization/Search.html


    // original array
    var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];
    console.log(arrayToSearch);

    // sort the array
    let sortedArr = arrayToSearch.sort((a, b) => a - b);
    console.log(sortedArr);


    // -------------------------------------
    // implement here
    const binarySearch = (arr, searchValue, fromIndex, toIndex) => {

        let midpoint = Math.floor((fromIndex + toIndex) / 2);

        let midpointValue = arr[midpoint];

        if (searchValue < midpointValue) {
            return binarySearch(arr, searchValue, fromIndex, midpoint);
        } else if (searchValue > midpointValue) {
            return binarySearch(arr, searchValue, midpoint, toIndex);
        } else if (searchValue === midpointValue) {
            return midpoint;
        }
    }

    // -------------------------------------
    // TEST data
    let x = 6;
    let findIndex = binarySearch(sortedArr, x, 0, sortedArr.length - 1)
    console.log("Element {", x, "} found! at index; ", findIndex);

    x = 199;
    findIndex = binarySearch(sortedArr, x, 0, sortedArr.length - 1)
    console.log("Element {", x, "} found! at index; ", findIndex);

};
main();