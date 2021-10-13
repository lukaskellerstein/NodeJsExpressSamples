function main() {

    // Visualization:
    // https://visualgo.net/en/sorting

    const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

    // -------------------------------------
    // implement here
    const insertionSort = (arr) => {

        // from left to right
        for (let i = 1; i < arr.length; i++) {
            const currentValue = arr[i];

            let leftIndex = i - 1;

            // from current to left
            while (leftIndex >= 0 && arr[leftIndex] > currentValue) {
                let leftValue = arr[leftIndex];
                arr[leftIndex] = currentValue;
                arr[leftIndex + 1] = leftValue;
                leftIndex--;
            }
        }
    }

    // -------------------------------------
    // TEST data
    console.log(arr);
    insertionSort(arr);
    console.log(arr);

};
main();