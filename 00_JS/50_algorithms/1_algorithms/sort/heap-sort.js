function heapSort(array) {
    // Build our max heap.
    buildMaxHeap(array);

    console.log(array);

    // Find last element.
    lastElement = array.length - 1;

    // Continue heap sorting until we have
    // just one element left in the array.
    while (lastElement > 0) {
        swap(array, 0, lastElement);

        heapify(array, 0, lastElement);

        lastElement -= 1
    }
}

function buildMaxHeap(array) {
    var i;
    i = array.length / 2 - 1;
    i = Math.floor(i);

    // Build a max heap out of
    // all array elements passed in.
    while (i >= 0) {
        heapify(array, i, array.length);
        i -= 1;
    }
}

function heapify(heap, i, max) {
    var index, leftChild, righChild;

    while (i < max) {
        index = i;

        leftChild = 2 * i + 1;
        righChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if (righChild < max && heap[righChild] > heap[index]) {
            index = righChild;
        }

        if (index == i) {
            return;
        }

        swap(heap, i, index);

        i = index;
    }
}

function swap(array, firstItemIndex, lastItemInde) {
    var tmp = array[firstItemIndex];

    // Swap first and last items in the array.
    array[firstItemIndex] = array[lastItemInde];
    array[lastItemInde] = tmp;
}



const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];


console.log(arr);

heapSort(arr);

console.log(arr);