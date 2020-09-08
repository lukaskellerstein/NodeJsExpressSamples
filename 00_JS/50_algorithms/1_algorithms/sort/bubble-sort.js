
// ----------------------------------
// ----------------------------------
// BUBBLE SORT
// Simplest one, the most greedy
//
// Time complexity: O(N²)
//
// https://www.geeksforgeeks.org/bubble-sort/
// ----------------------------------
// ----------------------------------

let arr = [5, 7, 34, 2, 6, 88, 9, 76, 50, 22, 3, 1, 25, 33, 4, 55];


// For loop in For loop
const bubbleSort1 = (arr) => {

    let arrLength = arr.length;
    let lastIndex = arr.length - 1;

    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < lastIndex - i; j++) {

            let currentValue = arr[j];
            let nextValue = arr[j + 1];

            if (currentValue > nextValue) {
                arr[j] = nextValue;
                arr[j + 1] = currentValue;
            }

        }

    }
}

// IMPROVED with 'swapped' variable
const bubbleSort2 = (arr) => {

    let swapped;

    do {
        swapped = false;
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) {
                // Save the value to a variable so we don't lose it
                let temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true;
            }
        })
    } while (swapped);
    // run sorting until there is "no swapping" 

}

// BEST - recursive version
const bubbleSort3 = (arr, n) => {

    // Base case 
    if (n == 1)
        return;

    // One pass of bubble  
    // sort. After this pass, 
    // the largest element 
    // is moved (or bubbled)  
    // to end. 
    for (let i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1]) {
            // swap arr[i], arr[i+1] 
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }

    // Largest element is fixed, 
    // recur for remaining array 
    bubbleSort3(arr, n - 1);
}


console.log(arr);

// bubbleSort(arr);
// bubbleSort2(arr);
bubbleSort3(arr, arr.length);

console.log(arr);