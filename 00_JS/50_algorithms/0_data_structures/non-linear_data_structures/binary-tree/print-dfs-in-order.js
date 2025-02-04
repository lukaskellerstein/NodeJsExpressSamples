import { bt1 } from "./binary-tree.js";

// --------------------------------------------
// In-order traversal = Left → Root → Right
// --------------------------------------------

function print_dfs_in_order(root) {
  if (!root) return;

  // LEFT - Recur on the left subtree
  print_dfs_in_order(root.left);

  // ROOT - Print current node's value
  console.log(root.value);

  // RIGHT - Recur on the right subtree
  print_dfs_in_order(root.right);
}

print_dfs_in_order(bt1.root);
