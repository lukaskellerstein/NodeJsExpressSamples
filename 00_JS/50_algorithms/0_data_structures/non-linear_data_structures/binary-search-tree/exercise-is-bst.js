import { bt1 } from "../binary-tree/binary-tree.js";
import { bst1 } from "./binary-search-tree.js";

// ---------------------------------------------
// TEST IF IT IS Binary Search Tree
// ---------------------------------------------
const isBST = (node, left, right) => {
  if (node == null) {
    return true;
  }

  if (left != null && node.value <= left.value) return false;

  if (right != null && node.value >= right.value) return false;

  return isBST(node.left, left, node) && isBST(node.right, node, right);
};

const result1 = isBST(bst1.root, null, null);
console.log(`is a tree a BST? ${result1}`);

const result2 = isBST(bt1.root, null, null);
console.log(`is a tree a BST? ${result2}`);
