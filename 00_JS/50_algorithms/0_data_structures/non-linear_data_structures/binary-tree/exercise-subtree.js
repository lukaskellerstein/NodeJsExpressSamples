import { BinaryTree } from "./binary-tree.js";

function areIdentical(a, b) {
  // 1. both trees are empty
  if (a === null && b === null) {
    return true;
  }

  // 2. one tree is empty or values are not the same
  if (a === null || b === null || a.value !== b.value) {
    return false;
  }

  // 3. check if left and right subtrees are identical
  return areIdentical(a.left, b.left) && areIdentical(a.right, b.right);
}

function isSubtree(tree, subtree) {
  // If the subtree is empty, it is always a subtree
  if (subtree === null) {
    return true;
  }

  // If the main tree is empty but the subtree is not, it's not a subtree
  if (tree === null) {
    return false;
  }

  // Check if the trees are identical starting from the current node
  if (areIdentical(tree, subtree)) {
    return true;
  }

  // Otherwise, recursively check the left and right subtrees
  return isSubtree(tree.left, subtree) || isSubtree(tree.right, subtree);
}

// Example usage:

// Create first tree (tree1)
let tree1 = new BinaryTree();
tree1.insert(4);
tree1.insert(1);
tree1.insert(2);
tree1.insert(10);

// Create second tree (tree2)
let tree2 = new BinaryTree();
tree2.insert(3);
tree2.insert(4);
tree2.insert(5);
tree2.insert(1);
tree2.insert(2);
tree2.insert(0);
tree2.insert(9);
tree2.insert(10);

// Check if tree1 is a subtree of tree2
console.log(isSubtree(tree2.root, tree1.root)); // Output: true
