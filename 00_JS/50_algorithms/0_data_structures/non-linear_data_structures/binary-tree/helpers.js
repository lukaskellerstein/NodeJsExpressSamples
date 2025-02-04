import { createCanvas } from "canvas";
import fs from "fs";

// Function to calculate the height of the tree
function getHeight(node) {
  if (!node) return 0;
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

// Function to draw the tree recursively
function drawTree(ctx, node, x, y, offsetX, levelHeight) {
  if (!node) return;

  // Draw the current node
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.strokeStyle = "#000000";
  ctx.stroke();

  // Draw the node value
  ctx.fillStyle = "#000000";
  ctx.font = "16px Arial";
  ctx.textAlign = "center";
  ctx.fillText(node.value, x, y + 6);

  // Draw connections to children
  if (node.left) {
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x - offsetX, y + levelHeight - 20);
    ctx.stroke();

    drawTree(
      ctx,
      node.left,
      x - offsetX,
      y + levelHeight,
      offsetX / 2,
      levelHeight
    );
  }

  if (node.right) {
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x + offsetX, y + levelHeight - 20);
    ctx.stroke();

    drawTree(
      ctx,
      node.right,
      x + offsetX,
      y + levelHeight,
      offsetX / 2,
      levelHeight
    );
  }
}

// Function to generate and save the tree visualization as an image
export function visualize(fileName, rootNode) {
  if (!rootNode) {
    console.log("Tree is empty.");
    return;
  }

  const height = getHeight(rootNode);
  const canvasWidth = 800;
  const canvasHeight = height * 150;

  // Create a canvas and get the drawing context
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext("2d");

  // Set background color
  ctx.fillStyle = "#F0F0F0";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Draw the tree
  drawTree(ctx, rootNode, canvasWidth / 2, 50, canvasWidth / 4, 100);

  // Save the canvas to an image file
  const out = fs.createWriteStream(fileName + ".png");
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () =>
    console.log("Tree visualization saved as binary_tree_visualization.png")
  );
}
