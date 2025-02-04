// --------------------------------------------------------
// BINARY SEARCH TREE
//
// also called an ordered or sorted binary tree
//
// SORTED
//
// print methods and search methods are the same as in the binary tree
// BUT
// we can leverage the property of the binary search tree => faster search
// viz. search.js and search.md
// --------------------------------------------------------

// ------------------------------------------
// Node class
// ------------------------------------------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// ------------------------------------------
// Binary Search tree class
// ------------------------------------------
class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }

  insert(value) {
    // Creating a node and initailising
    // with data
    var newNode = new TreeNode(value);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null) this.root = newNode;
    // find the correct position in the
    // tree and add the node
    else this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.value < node.value) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recur until
      // null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recur until
      // null is found
      else this.insertNode(node.right, newNode);
    }
  }

  remove(value) {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, value);
  }

  // Method to remove node with a
  // given data
  // it recur over the tree to find the
  // data and removes it
  removeNode(node, value) {
    // if the root is null then tree is
    // empty
    if (node === null) return null;
    // if data to be delete is less than
    // roots data then move to left subtree
    else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minumum node of the rigt subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }

  // Helper function
  // finds the minimum node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
}

// ----------------------
// BINARY SEARCH TREE 1
// ----------------------
export let bst1 = new BinarySearchTree();

// Add ----------------
bst1.insert(3);
bst1.insert(4);
bst1.insert(5);
bst1.insert(1);
bst1.insert(2);
bst1.insert(0);
bst1.insert(9);
bst1.insert(10);
