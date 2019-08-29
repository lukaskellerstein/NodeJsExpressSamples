const example_tree = {
  value: 5,
  left: null,
  right: {
    value: 6,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 11,
      left: null,
      right: null
    }
  }
};

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Iterative approach
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

const iterativeSumElements = function(tree) {
  let sumNodes = 0;
  let nodes = [tree];

  while (nodes.length > 0) {
    const node = nodes.pop();
    if (node != null) {
      sumNodes += node.value;
      nodes.push(node.left);
      nodes.push(node.right);
    }
  }

  return sumNodes;
};

console.log(iterativeSumElements(example_tree));

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Declarative approach
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

const sumElements = tree =>
  tree === null
    ? 0
    : tree.value + sumElements(tree.left) + sumElements(tree.right);

console.log(sumElements(example_tree));

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Declarative approach - after optimization
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

const tcoSumElements = tree => tcoSumNodeList([tree], 0);

const tcoSumNodeList = ([head, ...tail], sum) =>
  typeof head === 'undefined'
    ? sum
    : head === null
    ? tcoSumNodeList(tail, sum)
    : tcoSumNodeList([head.left, head.right, ...tail], sum + head.value);

console.log(tcoSumElements(example_tree));
