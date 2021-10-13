function main() {

    // original array
    var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];
    console.log(arrayToSearch);

    // sort the array
    let sortedArr = arrayToSearch.sort((a, b) => a - b);
    console.log(sortedArr);

    // start 10:42
    // end 10:53

    // -------------------------------------
    // implement here

























    // -------------------------------------
    // Test data

    console.log(jumpSearch(12, sortedArr));

};
main();