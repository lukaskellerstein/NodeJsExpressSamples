// -------------------------------
// Min Heap
// implemented using an Array
// -------------------------------

export class MyMinHeap {
  constructor() {
    // Array representation of the heap
    this.arr = [];
  }

  // Get the index of the left child of a node
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  // Get the index of the right child of a node
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  // Get the index of the parent of a node
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  // Insert a new value into the heap and maintain heap order
  insert(value) {
    // Add value to the end of the array
    this.arr.push(value);
    // Re-establish the heap property by bubbling the value up
    this.bubbleUp(this.arr.length - 1);
  }

  // Remove a value from the heap
  remove(value) {
    const index = this.arr.indexOf(value);

    if (index === -1) return; // Value not found

    // If the value is the last element, remove it directly
    if (index === this.arr.length - 1) {
      this.arr.pop();
    } else {
      // Replace the value with the last element and bubble down to maintain heap order
      this.arr[index] = this.arr.pop();
      this.bubbleDown(index);
    }
  }

  // Move a value up the tree until the heap property is restored
  bubbleUp(currentIndex) {
    while (currentIndex > 0) {
      // Find the parent of the current node
      let parentIndex = this.getParentIndex(currentIndex);

      // If the current value is smaller than the parent's value, swap them
      if (this.arr[currentIndex] < this.arr[parentIndex]) {
        [this.arr[currentIndex], this.arr[parentIndex]] = [
          this.arr[parentIndex],
          this.arr[currentIndex],
        ];
        // Continue bubbling up
        currentIndex = parentIndex;
      } else {
        // Heap property is restored
        break;
      }
    }
  }

  // Move a value down the tree until the heap property is restored
  bubbleDown(currentIndex) {
    // Get the indices of the left and right children
    let leftIndex = this.getLeftChildIndex(currentIndex);
    let rightIndex = this.getRightChildIndex(currentIndex);

    // Start by assuming the current node is the smallest
    let smallestIndex = currentIndex;

    // Check if the left child exists and is smaller than the current node
    if (
      leftIndex < this.arr.length &&
      this.arr[leftIndex] < this.arr[smallestIndex]
    ) {
      smallestIndex = leftIndex; // Update smallest index to left child
    }

    // Check if the right child exists and is smaller than the current smallest node
    if (
      rightIndex < this.arr.length &&
      this.arr[rightIndex] < this.arr[smallestIndex]
    ) {
      smallestIndex = rightIndex; // Update smallest index to right child
    }

    // If the smallest node is not the current node, swap and continue bubbling down
    if (smallestIndex !== currentIndex) {
      [this.arr[currentIndex], this.arr[smallestIndex]] = [
        this.arr[smallestIndex],
        this.arr[currentIndex],
      ];
      // Recursively bubble down the swapped value
      this.bubbleDown(smallestIndex);
    }
  }
}

// Example usage:
let myHeap = new MyMinHeap();

myHeap.insert(1);
myHeap.insert(5);
myHeap.insert(3);
myHeap.insert(10);
myHeap.insert(4);

myHeap.remove(1); // Remove the smallest value (1)
console.log(myHeap.arr);
