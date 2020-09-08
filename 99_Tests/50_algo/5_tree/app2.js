class MyBSTNode {
    constructor(value = "") {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MyBST {

    constructor() {
        this.head = null;
    }

    insert(value) {

        let newNode = new MyBSTNode(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            this.insertNode(newNode, this.head);
        }
    }

    insertNode(newNode, parent) {
        // GO RIGHT
        if (newNode.value > parent.value) {

            if (parent.right == null) {
                parent.right = newNode;
            } else {
                this.insertNode(newNode, parent.right);
            }
            // GO LEFT
        } else if (newNode.value < parent.value) {

            if (parent.left == null) {
                parent.left = newNode;
            } else {
                this.insertNode(newNode, parent.left);
            }
        } else {
            console.log('This should not happened');
        }
    }


    remove(value) {
        if (this.head !== null) {
            this.head = this.removeNode(value, this.head);
        }
    }

    removeNode(value, parent) {
        if (parent.value === value) {
            //zero children
            if (parent.left === null && parent.right === null) {
                parent = null;
            }

            // one child
            else if (parent.left !== null && parent.right === null) {

                const left = parent.left;
                parent = left;
            } else if (parent.left === null && parent.right !== null) {
                const right = parent.right;
                parent = right;
            }
            //two children
            else {
                parent.value = this.findMinValue(parent.right);

                parent.right = this.removeNode(parent.value, parent.right);
            }
        } else if (value > parent.value) {
            parent.right = this.removeNode(value, parent.right);
        } else if (value < parent.value) {
            parent.left = this.removeNode(value, parent.left);
        }

        return parent;
    }


    findMinValue(parent) {
        if (parent.left === null) {
            return parent.value;
        } else if (parent.left !== null && parent.left.left === null) {
            return parent.left.value;
        } else if (parent.left !== null && parent.left.left !== null) {
            return this.findMinValue(parent.left);
        }

    }

}

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


console.log(myTree);

//remove
myTree.remove(15);

console.log(myTree);

var i = 5;
