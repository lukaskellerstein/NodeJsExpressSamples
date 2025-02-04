import { bst1 } from "./binary-search-tree.js";

// Search function for BST
function searchBST(node, value) {
  // Base case: node is null or value is found
  if (node === null) {
    return false; // Value not found
  }
  if (node.value === value) {
    return true; // Value found
  }

  // Value is smaller, search in the left subtree
  if (value < node.value) {
    return searchBST(node.left, value);
  }

  // Value is larger, search in the right subtree
  return searchBST(node.right, value);
}

console.log(searchBST(bst1.root, 0)); // true
console.log(searchBST(bst1.root, 100000)); // false
