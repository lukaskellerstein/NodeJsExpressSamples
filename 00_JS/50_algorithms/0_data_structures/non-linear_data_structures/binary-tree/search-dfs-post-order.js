import { bt1 } from "./binary-tree.js";

// --------------------------------------------
// Post-order traversal = Left → Right → Root
// --------------------------------------------

function search_dfs_post_order(root, target) {
  if (!root) return false;

  // LEFT - Recur to the left
  if (search_dfs_post_order(root.left, target)) {
    return true;
  }

  // RIGHT - Recur to the right
  if (search_dfs_post_order(root.right, target)) {
    return true;
  }

  // ROOT - Check current node
  return root.value === target;
}

console.log(search_dfs_post_order(bt1.root, 0)); // true
console.log(search_dfs_post_order(bt1.root, 100000)); // false
