import { BinaryTree } from "./binary-tree.js";

const areIdentical = (a, b) => {
  /*1. both empty */
  if (a == null && b == null) {
    return true;
  }

  /* 2. one non-empty or values are not same */
  if (a == null || b == null || a.value !== b.value) {
    return false;
  }

  /* 3. check left and right subtrees */
  return areIdentical(a.left, b.left) && areIdentical(a.right, b.right);
};

// first tree
let tree1 = new BinaryTree();
tree1.insert(3);
tree1.insert(4);
tree1.insert(5);
tree1.insert(1);
tree1.insert(2);
tree1.insert(0);
tree1.insert(9);
tree1.insert(10);

// second tree
let tree2 = new BinaryTree();
tree2.insert(3);
tree2.insert(4);
tree2.insert(5);
tree2.insert(1);
tree2.insert(2);
tree2.insert(0);

// TEST
console.log(areIdentical(tree1.root, tree2.root)); // false
