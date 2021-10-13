function main() {
    // Visualization:
    // https://visualgo.net/en/sorting

    const arr1 = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

    // -------------------------------------
    // implement here
    const bubbleSort = (arr, maxIndex) => {

        if (maxIndex <= 1) return arr;

        let index = 0;
        while (index < maxIndex) {

            let currVal = arr[index];
            let nextVal = arr[index + 1];

            if (currVal > nextVal) {
                //swap
                arr[index] = nextVal;
                arr[index + 1] = currVal;
            }

            index++;
        }

        bubbleSort(arr, maxIndex - 1);
    }


    console.log(arr1);
    bubbleSort(arr1, arr1.length - 1);
    console.log(arr1);
    // -------------------------------------

};
main();
