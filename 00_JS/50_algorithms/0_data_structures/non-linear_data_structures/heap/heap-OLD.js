// --------------------------------------
// Binary Heap (implemented by Array) - MinHeap
// --------------------------------------

class MyMinHeap {
  constructor() {
    this.arr = [];
  }

  getLeftChild(parentIndex) {
    return this.arr[this.getLeftChildIndex(parentIndex)];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChild(parentIndex) {
    return this.arr[this.getRightChildIndex(parentIndex)];
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParent(childIndex) {
    return this.arr[this.getParentIndex(childIndex)];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  insert(value) {
    this.arr.push(value);

    if (this.arr.length > 1) {
      let currentIndex = this.arr.length - 1;
      this.bubbleUp(currentIndex);
    }
  }

  remove(value) {
    let resultIndex = null;
    this.arr.forEach((element, index) => {
      if (element === value) resultIndex = index;
    });

    if (resultIndex !== null) {
      this.arr[resultIndex] = this.arr.pop();
      this.bubbleDown(resultIndex, this.arr.length - 1);
    }
  }

  bubbleUp(currentIndex) {
    while (currentIndex > 0) {
      let currentValue = this.arr[currentIndex];
      let parentValue = this.getParent(currentIndex);
      let parentIndex = this.getParentIndex(currentIndex);

      if (currentValue < parentValue) {
        //swap
        this.arr[currentIndex] = parentValue;
        this.arr[parentIndex] = currentValue;
      }

      currentIndex--;
    }
  }

  bubbleDown(currentIndex, maxIndex) {
    console.log(currentIndex, maxIndex);

    if (currentIndex < maxIndex) {
      //--------------------------------------------------
      // LEFT
      //--------------------------------------------------
      let currentValue = this.arr[currentIndex];

      let leftValue = this.getLeftChild(currentIndex);
      let leftIndex = this.getLeftChildIndex(currentIndex);

      if (currentValue > leftValue) {
        //swap
        this.arr[currentIndex] = leftValue;
        this.arr[leftIndex] = currentValue;
      }

      this.bubbleDown(leftIndex, maxIndex);

      //--------------------------------------------------
      // RIGHT
      //--------------------------------------------------
      currentValue = this.arr[currentIndex];

      let rightValue = this.getRightChild(currentIndex);
      let rightIndex = this.getRightChildIndex(currentIndex);

      if (currentValue > rightValue) {
        //swap
        this.arr[currentIndex] = rightValue;
        this.arr[rightIndex] = currentValue;
      }

      this.bubbleDown(rightIndex, maxIndex);
    }
  }
}

let myHeap = new MyMinHeap();

myHeap.insert(1);
myHeap.insert(5);
myHeap.insert(3);
myHeap.insert(10);
myHeap.insert(4);

myHeap.remove(1);

var i = 5;

// https://codeburst.io/implementing-a-complete-binary-heap-in-javascript-the-priority-queue-7d85bd256ecf

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
    this.next = null;
  }
}

// --------------------------------------------
// Binary Heap (implemented by LinkedList)
// --------------------------------------------
class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      let pointer = this.first;
      while (pointer.next && priority < pointer.next.priority) {
        pointer = pointer.next;
      }
      newNode.next = pointer.next;
      pointer.next = newNode;
    }
  }

  remove() {
    const first = this.first;
    this.first = this.first.next;
    return first;
  }
}

// ------------------------------------------------
// Priority Queue (implemented by LinkedList)
// ------------------------------------------------

class PriorityQueue2 {
  constructor() {
    this.heap = [null];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.heap.push(newNode);
    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.priority > this.heap[currentNodeParentIdx].priority
    ) {
      const parent = this.heap[currentNodeParentIdx];
      this.heap[currentNodeParentIdx] = newNode;
      this.heap[currentNodeIdx] = parent;
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

  remove() {
    if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }
    const toRemove = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;
    let [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
    let currentChildIdx =
      this.heap[right] && this.heap[right].priority >= this.heap[left].priority
        ? right
        : left;
    while (
      this.heap[currentChildIdx] &&
      this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority
    ) {
      let currentNode = this.heap[currentIdx];
      let currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
    }
    return toRemove;
  }
}
