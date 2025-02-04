import { BinaryTree } from "./binary-tree.js";

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
// CONVERT TO SUM TREE - EASY
// ---------------------------------------------
// const sumTree = (tree) => {
//   //NO CHILD
//   if (!tree.left && !tree.right) {
//     return tree.value;
//   }

//   // ONE CHILD
//   if (tree.left && !tree.right) return tree.value + sumTree(tree.left);
//   if (!tree.left && tree.right) return tree.value + sumTree(tree.right);

//   // TWO CHILDREN
//   if (tree.left && tree.right) {
//     const left = sumTree(tree.left);
//     const right = sumTree(tree.right);

//     return tree.value + left + right;
//   }
// };

// Shorter version
function sumTree(root) {
  if (root === null) {
    return 0;
  }

  // Sum the current node's value and recursively sum the left and right subtrees
  return root.value + sumTree(root.left) + sumTree(root.right);
}

console.log(sumTree(tree1.root));
