import { bt1 } from "./binary-tree.js";

// --------------------------------------------
// In-order traversal = Left → Root → Right
// --------------------------------------------

function search_dfs_in_order(root, target) {
  if (!root) return false;

  // LEFT - Recur to the left
  if (search_dfs_in_order(root.left, target)) {
    return true;
  }

  // ROOT - Check current node
  if (root.value === target) {
    return true;
  }

  // RIGHT- Recur to the right
  return search_dfs_in_order(root.right, target);
}

console.log(search_dfs_in_order(bt1.root, 0)); // true
console.log(search_dfs_in_order(bt1.root, 100000)); // false
