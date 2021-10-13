
// ----------------------------------
// ----------------------------------
// QUICK SORT
// divide and conquer algorithm
//
// Time complexity: O(n log n)
//
// https://www.geeksforgeeks.org/quick-sort/
// https://www.digitalocean.com/community/tutorials/js-quick-sort
// ----------------------------------
// ----------------------------------

const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];


const swap = (arr, firstIndex, secondIndex) => {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}


const partition = (arr, left, right) => {

    let midpoint = Math.floor((right + left) / 2);
    let pivot = arr[midpoint];

    while (left <= right) {

        while (arr[left] < pivot) {
            left++;
        }

        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}


function quickSort(arr, left, right) {

    var index;

    if (arr.length > 1) {

        index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }

    }

    return arr;
}



console.log(arr);

var result = quickSort(arr, 0, arr.length - 1);

console.log(result);