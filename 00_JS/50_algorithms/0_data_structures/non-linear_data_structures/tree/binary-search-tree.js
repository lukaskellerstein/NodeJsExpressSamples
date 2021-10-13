function main() {

    // --------------------------------------------------------
    // BINARY SEARCH TREE
    //
    // also called an ordered or sorted binary tree 
    // 
    // SORTED
    // --------------------------------------------------------


    // ------------------------------------------
    // Node class 
    // ------------------------------------------
    class TreeNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    // ------------------------------------------
    // Binary Search tree class 
    // ------------------------------------------
    class BinarySearchTree {
        constructor() {
            // root of a binary seach tree 
            this.root = null;
        }

        // function to be implemented 
        // helper method which creates a new node to 
        // be inserted and calls insertNode 
        insert(value) {
            // Creating a node and initailising 
            // with data 
            var newNode = new TreeNode(value);

            // root is null then node will 
            // be added to the tree and made root. 
            if (this.root === null)
                this.root = newNode;
            else

                // find the correct position in the 
                // tree and add the node 
                this.insertNode(this.root, newNode);
        }

        // Method to insert a node in a tree 
        // it moves over the tree to find the location 
        // to insert a node with a given data 
        insertNode(node, newNode) {
            // if the data is less than the node 
            // data move left of the tree 
            if (newNode.value < node.value) {
                // if left is null insert node here 
                if (node.left === null)
                    node.left = newNode;
                else

                    // if left is not null recur until 
                    // null is found 
                    this.insertNode(node.left, newNode);
            }

            // if the data is more than the node 
            // data move right of the tree 
            else {
                // if right is null insert node here 
                if (node.right === null)
                    node.right = newNode;
                else

                    // if right is not null recur until 
                    // null is found 
                    this.insertNode(node.right, newNode);
            }
        }

        // helper method that calls the 
        // removeNode with a given data 
        remove(value) {
            // root is re-initialized with 
            // root of a modified tree. 
            this.root = this.removeNode(this.root, value);
        }

        // Method to remove node with a 
        // given data 
        // it recur over the tree to find the 
        // data and removes it 
        removeNode(node, value) {

            // if the root is null then tree is 
            // empty 
            if (node === null)
                return null;

            // if data to be delete is less than 
            // roots data then move to left subtree 
            else if (value < node.value) {
                node.left = this.removeNode(node.left, value);
                return node;
            }

            // if data to be delete is greater than 
            // roots data then move to right subtree 
            else if (value > node.value) {
                node.right = this.removeNode(node.right, value);
                return node;
            }

            // if data is similar to the root's data 
            // then delete this node 
            else {
                // deleting node with no children 
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }

                // deleting node with one children 
                if (node.left === null) {
                    node = node.right;
                    return node;
                }

                else if (node.right === null) {
                    node = node.left;
                    return node;
                }

                // Deleting node with two children 
                // minumum node of the rigt subtree 
                // is stored in aux 
                var aux = this.findMinNode(node.right);
                node.value = aux.value;

                node.right = this.removeNode(node.right, aux.value);
                return node;
            }

        }



        // Helper function 
        // finds the minimum node in tree 
        // searching starts from given node 
        findMinNode(node) {
            // if left of a node is null 
            // then it must be minimum node 
            if (node.left === null)
                return node;
            else
                return this.findMinNode(node.left);
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
    }


    // ----------------------
    // BINARY SEARCH TREE 1 
    // ----------------------
    var BST = new BinarySearchTree();

    // Add ----------------
    BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);

    //		 15 
    //		 / \ 
    //	   10   25 
    //	  / \   / \ 
    //	 7  13 22 27 
    //  / \   / 
    // 5   9 17 

    // Remove ----------------
    // node with no children 
    // BST.remove(5);

    //		 15 
    //		/  \ 
    //	  10   25 
    //	 / \   / \ 
    //	7  13 22 27 
    //	 \   / 
    //	  9 17 

    // node with one child 
    // BST.remove(7);

    //		 15 
    //		/  \ 
    //	  10   25 
    //	 / \   / \ 
    //	9  13 22 27 
    //		 / 
    //		17 

    // node with two children 
    // BST.remove(15);

    //		 17 
    //		/  \ 
    //	   10  25 
    //	  / \  / \ 
    //	 9 13 22 27 

    // ---------------------------------------------
    // Search a value
    // ---------------------------------------------
    let searchedNode = myTree.search(myTree.root, 13);
    console.log(searchedNode);


    // ---------------------------------------------
    // TEST IF IT IS Binary Search Tree
    // ---------------------------------------------
    const isBST = (node, left, right) => {

        if (node == null) {
            return true;
        }

        if (left != null && node.value <= left.value)
            return false;

        if (right != null && node.value >= right.value)
            return false;

        return isBST(node.left, left, node) && isBST(node.right, node, right)
    }


    const result2 = isBST(BST.root, null, null);
    console.log(`is a tree a BST? ${result2}`);

};
main();
