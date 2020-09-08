class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
        this.next = null;
    }
}

// https://codeburst.io/implementing-a-complete-binary-heap-in-javascript-the-priority-queue-7d85bd256ecf

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

class PriorityQueue {
    constructor() {
        this.heap = [null]
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
        let currentChildIdx = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left;
        while (this.heap[currentChildIdx] && this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority) {
            let currentNode = this.heap[currentIdx]
            let currentChildNode = this.heap[currentChildIdx];
            this.heap[currentChildIdx] = currentNode;
            this.heap[currentIdx] = currentChildNode;
        }
        return toRemove;
    }

}