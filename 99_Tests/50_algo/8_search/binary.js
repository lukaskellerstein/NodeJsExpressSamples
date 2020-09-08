

const binarySearch = (arr, searchValue, fromIndex, toIndex) => {

    if (fromIndex > toIndex) return false;

    let midpoint = Math.floor((fromIndex + toIndex) / 2);

    let midpointValue = arr[midpoint];

    if (midpointValue === searchValue) return true;

    if (searchValue < midpointValue) {
        return binarySearch(arr, searchValue, fromIndex, midpoint - 1);
    } else {
        return binarySearch(arr, searchValue, midpoint + 1, toIndex);
    }


}


// ----------------------------------
// ----------------------------------
// TEST CODE
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (binarySearch(arr, x, 0, arr.length - 1))
    console.log("Element found!<br>");
else console.log("Element not found!<br>");

x = 6;

if (binarySearch(arr, x, 0, arr.length - 1))
    console.log("Element found!<br>");
else console.log("Element not found!<br>"); 