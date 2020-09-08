
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

}


const isBT = (node, left, right) => {

    if (node == null) {
        return true;
    }

    if (left != null && node.value <= left.value)
        return false;

    if (right != null && node.value >= right.value)
        return false;

    return isBT(node.left, left, node) && isBT(node.right, node, right)

}



//		 3 
//		/ \ 
//	   2   5 
//	  / \ 
//	 1   4

let myTree = new BinaryTree();
myTree.root = new Node(3);
myTree.root.left = new Node(2);
myTree.root.right = new Node(5);
myTree.root.left.left = new Node(1);
myTree.root.left.right = new Node(4);

//is Binary Tree?
const result = isBT(myTree.root, null, null);



//		 4 
//		/ \ 
//	   2   5 
//	  / \ 
//	 1   3

let myTree2 = new BinaryTree();
myTree2.root = new Node(4);
myTree2.root.left = new Node(2);
myTree2.root.right = new Node(5);
myTree2.root.left.left = new Node(1);
myTree2.root.left.right = new Node(3);

//is Binary Tree?
const result2 = isBT(myTree2.root, null, null);


let i = 5;