function main() {

    // --------------------------------
    // BFS - Breadth First Search (Or Level Order Traversal)
    // --------------------------------

    class TreeNode {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    };

    class Tree {
        constructor() {
            this.root = null;
        };

        traverseBFS = () => {
            const result = [];

            if (!this.root) {
                return result;
            }

            const queue = new Queue();
            queue.enqueue(this.root);

            //while queue is not empty
            while (queue.arr.length !== 0) {

                // get and remove first element in queue
                const first = queue.dequeue();

                // add value to result
                result.push(first.value);

                // add all children to queue
                if (first.left)
                    queue.enqueue(first.left);
                if (first.right)
                    queue.enqueue(first.right);
            }

            return result;
        };
    }

    class Queue {
        constructor() {
            this.arr = [];
        };

        enqueue(item) {
            this.arr.push(item);
        }

        dequeue() {
            return this.arr.shift();
        }
    }

    // TEST ---------------------------------------

    //     1
    //    / \
    //   2   3
    //  / \
    // 4   5

    let tree = new Tree();
    tree.root = new TreeNode(1);
    tree.root.left = new TreeNode(2);
    tree.root.right = new TreeNode(3);
    tree.root.left.left = new TreeNode(4);
    tree.root.left.right = new TreeNode(5);

    console.log(tree.traverseBFS());

};
main();