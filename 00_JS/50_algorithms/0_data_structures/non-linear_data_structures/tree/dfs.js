function main() {

    // --------------------------------
    // DFS - Depth First Search
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

        traverseDFS(type) {
            //if there is no root, return false
            if (!this.root) {
                return false;
            }

            //switch statment to select proper order and start recursive function calls
            switch (type) {
                case "pre":
                    return this.preorder(this.root);
                case "post":
                    return this.postorder(this.root);
                case "in":
                    return this.inorder(this.root);
            }

        }


        // Performs inorder traversal of a tree 
        inorder = (node) => {
            let result = [];
            if (node !== null) {

                //LEFT
                let left = this.inorder(node.left);
                result = [...result, ...left];

                //CENTER
                result.push(node.value);

                //RIGHT
                let right = this.inorder(node.right);
                result = [...result, ...right];
            }
            return result;
        }

        // Performs preorder traversal of a tree	 
        preorder = (node) => {
            let result = [];
            if (node !== null) {

                //CENTER
                result.push(node.value);

                //LEFT
                let left = this.preorder(node.left);
                result = [...result, ...left];

                //RIGHT
                let right = this.preorder(node.right);
                result = [...result, ...right];
            }
            return result;
        }

        // Performs postorder traversal of a tree 
        postorder = (node) => {
            let result = [];
            if (node !== null) {

                //LEFT
                let left = this.postorder(node.left);
                result = [...result, ...left];

                //RIGHT
                let right = this.postorder(node.right);
                result = [...result, ...right];

                //CENTER
                result.push(node.value);
            }
            return result;
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

    console.log(tree.traverseDFS("pre"));
    console.log(tree.traverseDFS("in"));
    console.log(tree.traverseDFS("post"));

    // [ 1, 2, 4, 5, 3 ]
    // [ 4, 2, 5, 1, 3 ]
    // [ 4, 5, 2, 3, 1 ]

};
main();