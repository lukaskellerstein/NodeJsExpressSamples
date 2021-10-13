function main() {

    // Implement Binary Tree (not BST)
    //  Insert numbers 5,6,7,8,9,10,11
    //    5
    //   / \
    //  6   7
    // / \ / \
    //8  9 10 11
    //  Remove number 6
    //    5
    //   / \
    //  11   7
    // / \ / 
    //8  9 10 
    //  Remove number 5
    //    10
    //   / \
    //  11  7
    // / \  
    //8  9  
    //  Remove number 9
    //    10
    //   / \
    //  11  7
    // /   
    //8   
    //  Search number 6
    //  Search number 10

    // -------------------------------------
    // implement here

    class Node {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }

    class BinaryTree {
        constructor() {
            this.root = null;
        }

        insert(value) {

            if (this.root === null) {
                this.root = new Node(value);
                return;
            }

            // Breath First Search
            let queue = new Queue();
            queue.enqueue(this.root);

            while (queue.arr.length != 0) {

                let currentNode = queue.dequeue();

                //left
                if (currentNode.left === null) {
                    currentNode.left = new Node(value);
                    break;
                } else {
                    queue.enqueue(currentNode.left);
                }

                //right
                if (currentNode.right === null) {
                    currentNode.right = new Node(value);
                    break;
                } else {
                    queue.enqueue(currentNode.right);
                }
            }
        }

        remove(value) {

            if (this.root === null) {
                return false;
            }

            if (this.root.value === value && this.root.left === null && this.root.right === null) {
                this.root = null;
                return true;
            } else if (this.root.value !== value && this.root.left === null && this.root.right === null) {
                return false;
            }

            // Breath First Search
            let queue = new Queue();
            queue.enqueue(this.root);

            let currentNode = null;
            let searchNode = null;

            while (queue.arr.length != 0) {

                //current
                currentNode = queue.dequeue();

                if (currentNode.value === value) {
                    searchNode = currentNode;
                }

                //left
                if (currentNode.left !== null) {
                    queue.enqueue(currentNode.left);
                }

                //right
                if (currentNode.right !== null) {
                    queue.enqueue(currentNode.right);
                }
            }

            //swap
            if (searchNode !== null) {

                let lastValue = currentNode.value;
                this.removeNode(currentNode);
                searchNode.value = lastValue;

                return true;
            }

            return false;
        }

        removeNode(node) {
            // Breath First Search
            let queue = new Queue();
            queue.enqueue(this.root);

            while (queue.arr.length != 0) {

                //current
                let currentNode = queue.dequeue();

                //left
                if (currentNode.left !== null) {
                    if (currentNode.left === node) {
                        currentNode.left = null;
                        break;
                    } else {
                        queue.enqueue(currentNode.left);
                    }
                }

                //right
                if (currentNode.right !== null) {
                    if (currentNode.right === node) {
                        currentNode.right = null;
                        break;
                    } else {
                        queue.enqueue(currentNode.right);
                    }
                }

            }
        }

        search(value) {
            // Breath First Search
            let queue = new Queue();
            queue.enqueue(this.root);

            while (queue.arr.length != 0) {

                //current
                let currentNode = queue.dequeue();

                if (currentNode.value === value) {
                    return true;
                }

                //left
                if (currentNode.left !== null) {
                    queue.enqueue(currentNode.left);
                }

                //right
                if (currentNode.right !== null) {
                    queue.enqueue(currentNode.right);
                }
            }

            return false;
        }
    }

    class Queue {
        constructor() {
            this.arr = [];
        }

        enqueue(value) {
            this.arr.push(value);
        }

        dequeue() {
            return this.arr.shift();
        }
    }

    // -------------------------------------
    // TEST data
    let bt1Tree = new BinaryTree();

    // insert
    bt1Tree.insert(5);
    bt1Tree.insert(6);
    bt1Tree.insert(7);
    bt1Tree.insert(8);
    bt1Tree.insert(9);
    bt1Tree.insert(10);
    bt1Tree.insert(11);

    //    5
    //   / \
    //  6   7
    // / \ / \
    //8  9 10 11
    console.log(bt1Tree);

    //remove
    bt1Tree.remove(6);

    //    5
    //   / \
    //  11  7
    // / \ / 
    //8  9 10 
    console.log(bt1Tree);

    //remove
    bt1Tree.remove(5);

    //    10
    //   / \
    //  11  7
    // / \  
    //8  9  
    console.log(bt1Tree);

    //remove
    bt1Tree.remove(9);

    //    10
    //   / \
    //  11  7
    // /   
    //8    
    console.log(bt1Tree);


    //search
    console.log(bt1Tree.search(4));
    console.log(bt1Tree.search(10));
};
main();