function main() {

    // original array
    var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];
    console.log(arrayToSearch);

    // sort the array
    let sortedArr = arrayToSearch.sort((a, b) => a - b);
    console.log(sortedArr);


    // start 14:39
    // end 15:50 (with troubleshooting)

    // start 10:36
    // end 10:41


    // -------------------------------------
    // implement here





















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