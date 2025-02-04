import { bt1 } from "./binary-tree.js";

function search_bfs(root, target) {
  if (!root) return false;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.value === target) {
      return true; // Target found
    }

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false; // Target not found
}

console.log(search_bfs(bt1.root, 0)); // true
console.log(search_bfs(bt1.root, 100000)); // false
