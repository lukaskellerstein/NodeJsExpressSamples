function main() {

    // Implement Binary Search Tree
    // Insert numbers 15,25,10,7,22,17,13,5,9,27
    // Remove number 15
    // Implement method for checking if it is valid BST (Binary Search Tree)

    // start 09:08
    // end 09:40

    // start 06:10
    // end 06:46

    // -------------------------------------
    // implement here

    class Node {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }

    class MyBST {
        constructor() {
            this.root = null;
        }

        insert(value) {
            if (this.root === null) {
                this.root = new Node(value);
                return;
            }

            this.root = this.insertNode(value, this.root);
        }

        insertNode(value, node) {
            if (node === null) {
                node = new Node(value);
            } else {
                if (value < node.value) {
                    node.left = this.insertNode(value, node.left);
                } else if (value > node.value) {
                    node.right = this.insertNode(value, node.right);
                }
            }

            return node;
        }

        remove(value) {
            if (!this.root) {
                return false;
            }

            this.root = this.removeNode(value, this.root);
        }

        removeNode(value, node) {
            if (!node) {
                return node;
            }

            if (node.value === value) {

                // 0 children
                if (!node.left && !node.right) {
                    return null;
                }

                // 1 child
                if (node.left && !node.right) {
                    node = node.left;
                }

                if (!node.left && node.right) {
                    node = node.right;
                }

                // 2 children
                if (node.left && node.right) {
                    let minVal = this.findMinValue(node.right);

                    node.value = minVal;

                    node.right = this.removeNode(minVal, node.right);
                }
            } else if (value < node.value) {
                node.left = this.removeNode(value, node.left);
            } else if (value > node.value) {
                node.right = this.removeNode(value, node.right);
            }

            return node;
        }

        findMinValue(node) {
            if (!node.left) {
                return node.value;
            } else {
                return this.findMinValue(node.left)
            }
        }
    }


    // -------------------------------------
    // TEST data
    let myTree = new MyBST();
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

    // visualization: https://www.cs.usfca.edu/~galles/visualization/BST.html
    //       15
    //      /  \
    //    10    25
    //   / \    / \
    //  7  13  22 27
    // /\      /
    //5  9    17 

    console.log(myTree);

    //remove
    myTree.remove(15);

    //       17
    //      /  \
    //    10    25
    //   / \    / \
    //  7  13  22 27
    // /\      
    //5  9   

    console.log(myTree);

    // is BST?
    console.log('Is Binary Search Tree?');
    console.log(isBST(myTree.root, null, null));
};
main();