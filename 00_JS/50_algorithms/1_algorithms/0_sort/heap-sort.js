import { MyMinHeap } from "../../0_data_structures/non-linear_data_structures/heap/min-heap.js";

// ---------------------------------------
// Heap Sort using the MyMinHeap class
// ---------------------------------------

function heapSort(arr) {
  // Step 1: Create a MinHeap and insert all elements from the array
  let minHeap = new MyMinHeap();
  for (let value of arr) {
    minHeap.insert(value);
  }

  // Step 2: Extract elements one by one in sorted order
  let sortedArray = [];
  while (minHeap.arr.length > 0) {
    // Always remove the root of the heap, which is the smallest element
    sortedArray.push(minHeap.arr[0]);
    minHeap.remove(minHeap.arr[0]);
  }

  return sortedArray;
}

// ----------------------------------
// TEST
// ----------------------------------

let arr = [5, 46, 34, 2, 6, 14, 9, 7, 50, 22];

console.log(arr);

let result = heapSort(arr);

console.log(result);
