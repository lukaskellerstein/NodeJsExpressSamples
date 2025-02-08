// -------------------------------
// Priority Queue
// implemented using an Array
//
// same as MinHeap,
// but instead of storing only value,
// we are storing object { value, priority }
// -------------------------------

class PriorityQueue {
  constructor() {
    // Internal Min Heap to store elements
    this.heap = [];
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

  // Enqueue a new element with priority
  enqueue(value, priority) {
    // Push the element as an object { value, priority }
    this.heap.push({ value, priority });
    // Bubble up to maintain heap order
    this.bubbleUp(this.heap.length - 1);
  }

  // Dequeue the element with the highest priority (lowest priority value)
  dequeue() {
    if (this.heap.length === 0) return null;

    if (this.heap.length === 1) {
      // Only one element, remove and return it
      return this.heap.pop().value;
    }

    // Remove the root element and replace it with the last element
    const root = this.heap[0].value;
    this.heap[0] = this.heap.pop();
    // Bubble down to maintain heap order
    this.bubbleDown(0);

    return root;
  }

  // Move a value up the tree until the heap property is restored
  bubbleUp(currentIndex) {
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      // Compare priorities; smaller priority means higher priority
      if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
        // Swap with parent
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // Move a value down the tree until the heap property is restored
  bubbleDown(currentIndex) {
    let smallestIndex = currentIndex;
    const leftIndex = this.getLeftChildIndex(currentIndex);
    const rightIndex = this.getRightChildIndex(currentIndex);

    // Compare left child
    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex].priority < this.heap[smallestIndex].priority
    ) {
      smallestIndex = leftIndex;
    }

    // Compare right child
    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex].priority < this.heap[smallestIndex].priority
    ) {
      smallestIndex = rightIndex;
    }

    // Swap if needed and continue bubbling down
    if (smallestIndex !== currentIndex) {
      [this.heap[currentIndex], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[currentIndex],
      ];
      this.bubbleDown(smallestIndex);
    }
  }
}

// Example usage:
const pq = new PriorityQueue();

// Enqueue elements with priorities
pq.enqueue("Task A", 3); // Priority 3
pq.enqueue("Task B", 1); // Priority 1 (highest priority)
pq.enqueue("Task C", 2); // Priority 2

// Dequeue elements based on priority
console.log(pq.dequeue()); // Output: "Task B" (highest priority)
console.log(pq.dequeue()); // Output: "Task C"
console.log(pq.dequeue()); // Output: "Task A"
