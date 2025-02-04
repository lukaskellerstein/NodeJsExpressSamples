import { bt1 } from "./binary-tree.js";

// --------------------------------------------
// Pre-order traversal = Root → Left → Right
// --------------------------------------------

function print_dfs_pre_order(root) {
  if (!root) return;

  // ROOT - Print current node's value
  console.log(root.value);

  // LEFT - Recur on the left subtree
  print_dfs_pre_order(root.left);

  // RIGHT - Recur on the right subtree
  print_dfs_pre_order(root.right);
}

print_dfs_pre_order(bt1.root);
