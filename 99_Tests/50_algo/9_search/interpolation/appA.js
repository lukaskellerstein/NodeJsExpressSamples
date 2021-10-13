function main() {

    // original array
    var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];
    console.log(arrayToSearch);

    // sort the array
    let sortedArr = arrayToSearch.sort((a, b) => a - b);
    console.log(sortedArr);

    // start 14:50
    // end 15:06 (with troubleshooting)

    // start 10:55
    // end 11:03

    // -------------------------------------
    // implement here


    // -------------------------------------
    // Test data

    console.log(interpolationSearch(12, sortedArr, 0, sortedArr.length - 1));

};
main();