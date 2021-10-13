function main() {
    // Visualization:
    // https://www.studytonight.com/data-structures/jump-search-algorithm

    // original array
    var arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];
    console.log(arrayToSearch);

    // sort the array
    let sortedArr = arrayToSearch.sort((a, b) => a - b);
    console.log(sortedArr);

    // -------------------------------------
    // implement here
    const jumpSearch = (arr, searchedValue) => {

        let arrLength = arr.length;
        let step = Math.floor(Math.sqrt(arrLength));

        let lowerBound = 0;
        while (arr[Math.min(step, arrLength) - 1] < searchedValue) {
            lowerBound = step;
            step += step;
        }

        const upBound = lowerBound + step;
        for (let index = lowerBound; index <= upBound; index++) {
            const element = arr[index];

            if (element === searchedValue) {
                return index;
            }
        }

        return -1;
    }


    // -------------------------------------
    // TEST data
    console.log("Found at position :" + jumpSearch(sortedArr, 2));
    console.log("Found at position :" + jumpSearch(sortedArr, 144));
    console.log("Found at position :" + jumpSearch(sortedArr, 256));
    console.log("Found at position :" + jumpSearch(sortedArr, 500));

};
main();