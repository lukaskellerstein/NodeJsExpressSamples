import { BinaryTree } from "./binary-tree.js";
import { visualize } from "./helpers.js";

let tree1 = new BinaryTree();
tree1.insert(3);
tree1.insert(4);
tree1.insert(5);
tree1.insert(1);
tree1.insert(2);
tree1.insert(0);
tree1.insert(9);
tree1.insert(10);

// ---------------------------------------------
// CONVERT TO MIRROR TREE - EASY
// ---------------------------------------------
const mirrorTree = (tree) => {
  if (!tree) return null; // Base case: if the node is null, return

  // Recursively call for left and right children
  const left = mirrorTree(tree.left);
  const right = mirrorTree(tree.right);

  // Swap left and right children
  tree.left = right;
  tree.right = left;

  return tree;
};

let tree2 = mirrorTree(tree1);
visualize("mirror-tree", tree2);

// ---------------------------------------------
// CHECK IF IT IS A MIRROR TREE
// ---------------------------------------------

const checkIfMirrorTree = (tree1, tree2) => {
  if (!tree1 && !tree2) return true; // Both trees are null, so they are mirrors
  if (!tree1 || !tree2) return false; // One is null and the other isn't

  // Values must match and mirrored subtrees must also match
  return (
    tree1.value === tree2.value &&
    checkIfMirrorTree(tree1.left, tree2.right) &&
    checkIfMirrorTree(tree1.right, tree2.left)
  );
};

console.log(checkIfMirrorTree(tree1, tree2)); // true
