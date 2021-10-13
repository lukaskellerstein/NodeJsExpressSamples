function main() {

    // --------------------------------------------------------
    // BINARY TREE
    //
    // binary tree is a tree data structure 
    // in which each node has at most two children
    // 
    // NO SORT
    // --------------------------------------------------------

    // ------------------------------------------
    // Node class 
    // ------------------------------------------
    class TreeNode {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }

    // ------------------------------------------
    // Binary tree class 
    // ------------------------------------------
    class BinaryTree {
        constructor() {
            // root of a binary seach tree 
            this.root = null;
        }

        insert(value) {
            // --------------------------------
            // BFS - Breadth First Search (Or Level Order Traversal)
            // --------------------------------

            if (!this.root) {
                this.root = new TreeNode(value);
                return;
            }

            let queue = new Queue();
            queue.enqueue(this.root);

            // Do level order traversal until we find
            // an empty place.
            while (queue.arr.length != 0) {

                const first = queue.dequeue();

                if (!first.left) {
                    first.left = new TreeNode(value);
                    break;
                }
                else
                    queue.enqueue(first.left);

                if (!first.right) {
                    first.right = new TreeNode(value);
                    break;
                }
                else
                    queue.enqueue(first.right);
            }
        }


        remove(value) {
            if (!this.root) {
                return;
            }

            if (this.root.left == null &&
                this.root.right == null) {
                if (this.root.value == value) {
                    this.root = null;
                    return;
                }
                else
                    return;
            }

            // --------------------------------
            // BFS - Breadth First Search (Or Level Order Traversal)
            // --------------------------------

            let queue = new Queue();
            queue.enqueue(this.root);

            let firstNode = null;
            let valueNode = null;

            while (queue.arr.length > 0) {
                firstNode = queue.dequeue();

                // current value
                if (firstNode.value == value) {
                    valueNode = firstNode;
                }

                // left
                if (firstNode.left != null)
                    queue.enqueue(firstNode.left);

                // right
                if (firstNode.right != null)
                    queue.enqueue(firstNode.right);

            }

            if (valueNode != null) {
                let x = firstNode.value;
                this.removeNode(firstNode);
                valueNode.value = x;
            }
        }

        removeNode(delNode) {
            // --------------------------------
            // BFS - Breadth First Search (Or Level Order Traversal)
            // --------------------------------

            let queue = new Queue();
            queue.enqueue(this.root);

            while (queue.arr.length > 0) {
                let temp = queue.dequeue();

                // left
                if (temp.left) {
                    if (temp.left == delNode) {
                        temp.left = null;
                        return;
                    } else {
                        queue.enqueue(temp.left);
                    }
                }

                // right
                if (temp.right) {
                    if (temp.right == delNode) {
                        temp.right = null;
                        return;
                    } else {
                        queue.enqueue(temp.right);
                    }
                }
            }
        }

        search(value) {
            // --------------------------------
            // BFS - Breadth First Search (Or Level Order Traversal)
            // --------------------------------

            if (!this.root) {
                return false;
            }

            let queue = new Queue();
            queue.enqueue(this.root);
            while (queue.arr.length > 0) {

                let currentNode = queue.dequeue();

                // current value
                if (value === currentNode.value)
                    return true;

                // left
                if (currentNode.left)
                    queue.enqueue(currentNode.left);

                //right
                if (currentNode.right)
                    queue.enqueue(currentNode.right);
            }

            return false;
        }

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


    // ----------------------
    // BINARY TREE 1 (Complete binary tree)
    // Complete Binary Tree - if all the levels are completely filled 
    // except possibly the last level 
    // and the last level has all keys as left as possible -> The (0) value
    // ----------------------
    //[3,4,5,1,2,null,null,0]

    //        3
    //      /   \
    //     4     5
    //    / \   /   
    //   1   2 0    

    let bt1 = new BinaryTree();
    bt1.root = new TreeNode(3);
    bt1.root.left = new TreeNode(4);
    bt1.root.right = new TreeNode(5);
    bt1.root.left.left = new TreeNode(1);
    bt1.root.left.right = new TreeNode(2);
    bt1.root.right.left = new TreeNode(0);

    //or

    let bt1Tree = new BinaryTree();
    bt1Tree.insert(3);
    bt1Tree.insert(4);
    bt1Tree.insert(5);
    bt1Tree.insert(1);
    bt1Tree.insert(2);
    bt1Tree.insert(0);

    // ----------------------
    // BINARY TREE 2 (Full binary tree)
    // Full binary tree - if every node has 0 or 2 children.
    // ----------------------
    //[3,4,5,1,2]

    //     3
    //    / \
    //   4   5
    //  / \     
    // 1   2   

    let bt2 = new BinaryTree();
    bt2.root = new TreeNode(3);
    bt2.root.left = new TreeNode(4);
    bt2.root.right = new TreeNode(5);
    bt2.root.left.left = new TreeNode(1);
    bt2.root.left.right = new TreeNode(2);

    //or

    let bt2Tree = new BinaryTree();
    bt2Tree.insert(3);
    bt2Tree.insert(4);
    bt2Tree.insert(5);
    bt2Tree.insert(1);
    bt2Tree.insert(2);

    // ----------------------
    // BINARY TREE 3 (Perfect = Full + complete binary tree)
    // ----------------------
    //[4,1,2]

    //   4
    //  / \ 
    // 1   2

    let bt3 = new BinaryTree();
    bt3.root = new TreeNode(4);
    bt3.root.left = new TreeNode(1);
    bt3.root.right = new TreeNode(2);

    //or

    let bt3Tree = new BinaryTree();
    bt3Tree.insert(4);
    bt3Tree.insert(1);
    bt3Tree.insert(2);


    // ----------------------
    // BINARY TREE 4 (nothing special on this tree)
    // ----------------------
    //[4,1,2]

    //   4
    //  / \ 
    // 1   2
    //      \
    //       0

    let bt4 = new BinaryTree();
    bt4.root = new TreeNode(4);
    bt4.root.left = new TreeNode(1);
    bt4.root.right = new TreeNode(2);
    bt4.root.right.right = new TreeNode(0);


    // ---------------------------------------------
    // BASIC OPERATIONS 
    // ---------------------------------------------

    // Add ----------------
    bt4.insert(9);
    bt4.insert(10);

    // Remove ----------------
    bt4.remove(4);

    // ---------------------------------------------
    // Search a value
    // ---------------------------------------------
    console.log(bt4.search(4));
    console.log(bt4.search(10));

    // ---------------------------------------------
    // TEST IF TWO BT are same - variant 1
    // ---------------------------------------------

    const identicalTrees = (a, b) => {
        /*1. both empty */
        if (a == null && b == null) {
            return true;
        }

        /* 2. one non-empty or values are not same */
        if (a == null || b == null || a.value !== b.value) {
            return false;
        }

        return identicalTrees(a.left, b.left) && identicalTrees(a.right, b.right);
    }


    // Example of same trees ----------
    let copyOfBt1 = bt1;
    console.log(`Are tree identical - ver1. - ${identicalTrees(bt1.root, copyOfBt1.root)}`);

    // Example of different trees ----
    console.log(`Are tree identical - ver1. - ${identicalTrees(bt1.root, bt2.root)}`);


    // ---------------------------------------------
    // TEST IF TWO BT are same - variant 2
    // ---------------------------------------------
    // with help of preorder, inorder, postorder traversal

    // Performs inorder traversal of a tree 
    const inorder = (node) => {
        let result = [];
        if (node !== null) {

            //LEFT
            let left = inorder(node.left);
            result = [...result, ...left];

            //CENTER
            result.push(node.value);

            //RIGHT
            let right = inorder(node.right);
            result = [...result, ...right];
        }
        return result;
    }

    // Performs preorder traversal of a tree	 
    const preorder = (node) => {
        let result = [];
        if (node !== null) {

            //CENTER
            result.push(node.value);

            //LEFT
            let left = preorder(node.left);
            result = [...result, ...left];

            //RIGHT
            let right = preorder(node.right);
            result = [...result, ...right];
        }
        return result;
    }

    // Performs postorder traversal of a tree 
    const postorder = (node) => {
        let result = [];
        if (node !== null) {

            //LEFT
            let left = postorder(node.left);
            result = [...result, left];

            //RIGHT
            let right = postorder(node.right);
            result = [...result, ...right];

            //CENTER
            result.push(node.value);
        }
        return result;
    }

    const identicalTrees2 = (a, b) => {

        //preorder check
        let preRes1 = preorder(a);
        let preRes2 = preorder(b);
        let preRes = preRes1.join("") === preRes2.join("")

        //inorder check
        let inRes1 = inorder(a);
        let inRes2 = inorder(b);
        let inRes = inRes1.join("") === inRes2.join("")

        return preRes && inRes;
    }


    // Example of same trees ----------
    copyOfBt1 = bt1;
    console.log(`Are tree identical - ver2. - ${identicalTrees2(bt1.root, copyOfBt1.root)}`);

    // Example of different trees ----
    console.log(`Are tree identical - ver2. - ${identicalTrees2(bt1.root, bt2.root)}`);



    // ---------------------------------------------
    // TEST IF one BT is subtree of another BT - variant 1
    // ---------------------------------------------

    const isSubtree = (originTree, subTree) => {

        // Null subtree is ALWAYS a subtree of any tree !!!
        if (subTree === null) return true;

        // if we have some not-null subtree and originTree is null -> NEVER a subtree
        if (originTree === null) return false;

        // check if trees are identical
        if (identicalTrees(originTree, subTree)) {
            // identical = subtree
            return true;
        }
        let identical = identicalTrees(originTree, subTree);
        let left = isSubtree(originTree.left, subTree);
        let right = isSubtree(originTree.right, subTree);

        return identical || left || right;
    }

    // Example of correct subtree
    console.log(`Is subtree - ver1. - ${isSubtree(bt2.root, bt3.root)}`);
    console.log(`Is subtree - ver1. - ${isSubtree(bt2.root, null)}`);

    // Example of wrong subtree
    console.log(`Is subtree - ver1. - ${isSubtree(bt2.root, bt4.root)}`);


    // ---------------------------------------------
    // CONVERT TO MIRROR TREE - EASY
    // ---------------------------------------------
    const mirrorTree = (tree) => {

        if (tree.left) tree.left = mirrorTree(tree.left)
        if (tree.right) tree.right = mirrorTree(tree.right)

        // NO CHILDREN
        if (!tree.left && !tree.right) {
            // do nothing
        }
        // ONE CHILDREN
        else if (tree.left && !tree.right) {
            //swap
            tree.right = tree.left;
        } else if (!tree.left && tree.right) {
            //swap
            tree.left = tree.right;
        }
        // TWO CHILDREN
        else if (tree.left && tree.right) {
            //swap
            const left = tree.left;
            tree.left = tree.right;
            tree.right = left;
        }

        return tree;

    }


    console.log(mirrorTree(bt1.root));


    // ---------------------------------------------
    // CHECK IF IT IS A MIRROR TREE
    // ---------------------------------------------

    const checkIfMirrorTree = (tree1, tree2) => {

        if (tree1.value !== tree2.value) {
            return false;
        } else {

            let leftResult = false;
            let rightResult = false;

            //LEFT
            if (tree1.left && tree2.left) {
                leftResult = checkIfMirrorTree(tree1.left, tree2.left);
            } else if (!tree1.left && !tree2.left) {
                leftResult = true;
            } else {
                return false;
            }

            //RIGHT
            if (tree1.right && tree2.right) {
                rightResult = checkIfMirrorTree(tree1.right, tree2.right);
            } else if (!tree1.right && !tree2.right) {
                rightResult = true;
            } else {
                return false;
            }

            if (leftResult && rightResult) {
                return true;
            } else {
                return false;
            }

        }

    }

    let mirroredTree = mirrorTree(bt1);
    console.log(checkIfMirrorTree(bt1.root, mirroredTree.root));
    console.log(checkIfMirrorTree(bt2.root, mirroredTree.root));



    // ---------------------------------------------
    // CONVERT TO SUM TREE - EASY
    // ---------------------------------------------
    const sumTree = (tree) => {

        //NO CHILD
        if (!tree.left && !tree.right) {
            return tree.value;
        }

        // ONE CHILD
        if (tree.left && !tree.right) return tree.value + sumTree(tree.left);
        if (!tree.left && tree.right) return tree.value + sumTree(tree.right);

        // TWO CHILDREN
        if (tree.left && tree.right) {

            const left = sumTree(tree.left);
            const right = sumTree(tree.right);

            return tree.value + left + right;
        }
    }


    console.log(sumTree(bt1.root));


};
main();