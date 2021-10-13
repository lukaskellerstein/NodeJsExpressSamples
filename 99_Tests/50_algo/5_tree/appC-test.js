function main() {

    // Implement Binary Search Tree
    // Insert numbers 15,25,10,7,22,17,13,5,9,27
    // Remove number 15
    // Implement method for checking if it is valid BST (Binary Search Tree)


    // -------------------------------------
    // implement here
    class MyNode {
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
                this.root = new MyNode(value);
            } else {
                this.root = this.insertNode(value, this.root);
            }
        }

        insertNode(value, node) {

            if (node === null) {
                node = new MyNode(value);
            } else {
                // left
                if (value < node.value) {
                    node.left = this.insertNode(value, node.left);
                }
                // right
                else if (value > node.value) {
                    node.right = this.insertNode(value, node.right);
                }
            }

            return node;
        }

        remove(value) {
            this.root = this.removeNode(value, this.root);
        }

        removeNode(value, node) {

            if (node === null) {
                return node;
            }

            if (value === node.value) {

                // no child
                if (node.left === null && node.right === null) {
                    return null;
                }

                // one child
                if (node.left !== null && node.right === null) {
                    node = node.left;
                }
                if (node.left === null && node.right !== null) {
                    node = node.right;
                }

                //two children
                if (node.left !== null && node.right !== null) {
                    var minValue = this.findMin(node.right);
                    node.right = this.removeNode(minValue, node.right);
                    node.value = minValue;
                }
            } else {
                // left
                if (value < node.value) {
                    node.left = this.removeNode(value, node.left);
                } else if (value > node.value) {
                    node.right = this.removeNode(value, node.right);
                }
            }

            return node;
        }

        findMin(node) {
            if (node.left === null) {
                // let val = node.value;
                // node = null;
                return node.value;
            } else {
                return this.findMin(node.left);
            }
        }
    }

    // IS Binary Search TREE? 
    const isBST = (node, left, right) => {

        if (node == null) {
            return true;
        }

        if (left != null && node.value <= left.value)
            return false;

        if (right != null && node.value >= right.value)
            return false;

        let leftSide = isBST(node.left, left, node);
        let rightSide = isBST(node.right, node, right);

        return leftSide && rightSide;
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