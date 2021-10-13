
// ----------------------------------
// ----------------------------------
// INSERTION SORT
// as cards in hand
//
// Default sort() in JavaScript uses insertion sort by V8 Engine of Chrome
//
// Time complexity: O(n*2)
//
// https://www.geeksforgeeks.org/insertion-sort/
// ----------------------------------
// ----------------------------------


const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];


const insertionSort = (arr) => {
    // Iterate array from left to right
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];

        let leftIndex = i - 1;

        // Iterate right side of the array 
        // from current location to the left
        // (from right to left)
        while (leftIndex >= 0 && arr[leftIndex] > current) {
            let leftValue = arr[leftIndex];
            arr[leftIndex] = current;
            arr[leftIndex + 1] = leftValue;

            leftIndex--;
        }
    }
}


console.log(arr);

insertionSort(arr);

console.log(arr);