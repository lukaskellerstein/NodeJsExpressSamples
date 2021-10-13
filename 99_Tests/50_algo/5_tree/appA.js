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

    // start 06:45
    // end 07:36

    // start 07:54
    // end 08:23

    // start 05:50
    // end 06:08

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
                return
            }

            //Breath first search
            let queue = new Queue();
            queue.enqueue(this.root);

            while (queue.arr.length !== 0) {

                let currentItem = queue.dequeue();

                //left
                if (currentItem.left === null) {
                    currentItem.left = new Node(value);
                    break;
                } else {
                    queue.enqueue(currentItem.left);
                }

                //right
                if (currentItem.right === null) {
                    currentItem.right = new Node(value);
                    break;
                } else {
                    queue.enqueue(currentItem.right);
                }
            }

        }


        remove(value) {
            if (this.root === null) {
                return false;
            }

            //Breath first search
            let queue = new Queue();
            queue.enqueue(this.root);

            let lastNode = null;
            let searchedNode = null;

            while (queue.arr.length !== 0) {

                let currentItem = queue.dequeue();

                lastNode = currentItem;

                if (currentItem.value === value) {
                    searchedNode = currentItem;
                }

                //left
                if (currentItem.left !== null) {
                    queue.enqueue(currentItem.left);
                }

                //right
                if (currentItem.right !== null) {
                    queue.enqueue(currentItem.right);
                }
            }

            if (searchedNode !== null) {
                let lastValue = lastNode.value;
                this.removeNode(lastNode.value);
                searchedNode.value = lastValue;
            }
        }

        removeNode(value) {
            //Breath first search
            let queue = new Queue();
            queue.enqueue(this.root);

            while (queue.arr.length !== 0) {

                let currentItem = queue.dequeue();


                //left
                if (currentItem.left !== null) {
                    if (currentItem.left.value === value) {
                        currentItem.left = null;
                    } else {
                        queue.enqueue(currentItem.left);
                    }
                }

                //right
                if (currentItem.right !== null) {
                    if (currentItem.right.value === value) {
                        currentItem.right = null;
                    } else {
                        queue.enqueue(currentItem.right);
                    }
                }
            }
        }


        search(value) {
            if (this.root === null) {
                return false;
            }

            //Breath first search
            let queue = new Queue();
            queue.enqueue(this.root);

            while (queue.arr.length !== 0) {

                let currentItem = queue.dequeue();

                if (currentItem.value === value) {
                    return true;
                }

                //left
                if (currentItem.left !== null) {
                    queue.enqueue(currentItem.left);
                }

                //right
                if (currentItem.right !== null) {
                    queue.enqueue(currentItem.right);
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