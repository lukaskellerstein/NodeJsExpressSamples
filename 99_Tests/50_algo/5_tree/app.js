
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

    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {

        // Where to put a new node? LEFT or RIGHT?

        // PUT into RIGHT
        if (newNode.value > node.value) {

            // is right node already exist ?
            if (node.right === null) {
                node.right = newNode;
            } else {
                // go deeper
                this.insertNode(node.right, newNode);
            }
        }

        // PUT into LEFT
        if (newNode.value < node.value) {

            // is left node already exist ?
            if (node.left === null) {
                node.left = newNode;
            } else {
                // go deeper
                this.insertNode(node.left, newNode);
            }
        }

    }

    remove(value) {
        if (this.root !== null) {
            this.root = this.removeNode(this.root, value);
        }
    }

    removeNode(node, value) {
        if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else {

            // current node doesn't has any children
            if (node.left === null && node.right === null) {
                return null;
            }

            // current node has 1 child
            if (node.left !== null && node.right === null) {
                node = node.left;
                return node;
            }

            if (node.right !== null && node.left === null) {
                node = node.right;
                return node;
            }

            // current node has 2 children
            if (node.right !== null && node.left !== null) {

                // lets find a minimal value on the right side
                let minNode = this.findMinNode(node.right);
                node.value = minNode.value;


                // remove the min node
                node.right = this.removeNode(node.right, minNode.value);
                return node;
            }
        }
    }

    search(node, value) {

        if (node === null) {
            return null;
        }

        if (value > node.value) {
            return this.search(node.right, value);
        } else if (value < node.value) {
            return this.search(node.left, value);
        } else {
            return node;
        }
    }

    findMinNode(node) {
        if (node.left !== null) {
            let minVal = this.findMinNode(node.left);
            return minVal;
        } else {
            return node;
        }

    }
}




let myTree = new BinaryTree();
myTree.insert(15);
myTree.insert(25);
myTree.insert(10);
myTree.insert(7);
myTree.insert(22);
myTree.insert(17);
myTree.insert(13);
myTree.insert(5);
myTree.insert(9);
myTree.insert(27);




//remove
myTree.remove(15);


//search
let searchedNode = myTree.search(myTree.root, 13);

let i = 5;