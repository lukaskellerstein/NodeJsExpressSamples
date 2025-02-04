import { bt1 } from "./binary-tree.js";

function print_bfs(root) {
  if (!root) return;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    // Print current node's value
    console.log(node.value);

    // Add children to the queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

print_bfs(bt1.root);
