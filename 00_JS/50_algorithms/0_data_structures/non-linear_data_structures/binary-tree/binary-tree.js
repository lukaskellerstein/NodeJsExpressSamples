// --------------------------------------------------------
// BINARY TREE
//
// binary tree is a tree data structure
// in which each node has at most two children
//
// Insert = BFS - Breadth First Search (Or Level Order Traversal)
// Remove = BFS - Breadth First Search (Or Level Order Traversal)
//
// --------------------------------------------------------

// ------------------------------------------
// Node class
// ------------------------------------------
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// ------------------------------------------
// Binary tree class
// ------------------------------------------
export class BinaryTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }

    // --------------------------------
    // BFS - Breadth First Search (Or Level Order Traversal)
    // does not make sense to use DFS
    // => we want to keep tree balanced and complete !!!
    // --------------------------------
    let queue = new Queue();
    queue.enqueue(this.root);

    while (queue.arr.length != 0) {
      const currentNode = queue.dequeue();

      if (!currentNode.left) {
        currentNode.left = new TreeNode(value);
        break;
      } else {
        queue.enqueue(currentNode.left);
      }

      if (!currentNode.right) {
        currentNode.right = new TreeNode(value);
        break;
      } else {
        queue.enqueue(currentNode.right);
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return;
    }

    if (this.root.left == null && this.root.right == null) {
      if (this.root.value == value) {
        this.root = null;
        return;
      } else return;
    }

    // --------------------------------
    // BFS - Breadth First Search (Or Level Order Traversal)
    // does not make sense to use DFS
    // => we want to keep tree balanced and complete !!!
    // --------------------------------

    let queue = new Queue();
    queue.enqueue(this.root);

    let firstNode = null;
    let valueNode = null;

    while (queue.arr.length > 0) {
      firstNode = queue.dequeue();

      // current value
      if (firstNode.value == value) {
        valueNode = firstNode;
      }

      // left
      if (firstNode.left != null) queue.enqueue(firstNode.left);

      // right
      if (firstNode.right != null) queue.enqueue(firstNode.right);
    }

    if (valueNode != null) {
      let x = firstNode.value;
      this.removeNode(firstNode);
      valueNode.value = x;
    }
  }

  removeNode(delNode) {
    // --------------------------------
    // BFS - Breadth First Search (Or Level Order Traversal)
    // does not make sense to use DFS
    // => we want to keep tree balanced and complete !!!
    // --------------------------------

    let queue = new Queue();
    queue.enqueue(this.root);

    while (queue.arr.length > 0) {
      let temp = queue.dequeue();

      // left
      if (temp.left) {
        if (temp.left == delNode) {
          temp.left = null;
          return;
        } else {
          queue.enqueue(temp.left);
        }
      }

      // right
      if (temp.right) {
        if (temp.right == delNode) {
          temp.right = null;
          return;
        } else {
          queue.enqueue(temp.right);
        }
      }
    }
  }
}

class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(item) {
    this.arr.push(item);
  }

  dequeue() {
    return this.arr.shift();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}

export let bt1 = new BinaryTree();
bt1.insert(3);
bt1.insert(4);
bt1.insert(5);
bt1.insert(1);
bt1.insert(2);
bt1.insert(0);
bt1.insert(9);
bt1.insert(10);
