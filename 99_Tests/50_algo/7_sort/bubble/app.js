const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

const bubbleSort = (arr, length) => {
    if (length <= 1) return;

    let currentIndex = 0;
    while (currentIndex < length) {

        let currentValue = arr[currentIndex];
        let nextValue = arr[currentIndex + 1];

        if (currentValue > nextValue) {
            arr[currentIndex] = nextValue;
            arr[currentIndex + 1] = currentValue;
        }

        currentIndex++;
    }

    bubbleSort(arr, length - 1);
}

console.log(arr);

bubbleSort(arr, arr.length);

console.log(arr);