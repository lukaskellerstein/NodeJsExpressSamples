import { bt1 } from "./binary-tree.js";

// --------------------------------------------
// Post-order traversal = Left → Right → Root
// --------------------------------------------

function print_dfs_post_order(root) {
  if (!root) return;

  // LEFT - Recur on the left subtree
  print_dfs_post_order(root.left);

  // RIGHT - Recur on the right subtree
  print_dfs_post_order(root.right);

  // ROOT - Print current node's value
  console.log(root.value);
}

print_dfs_post_order(bt1.root);
