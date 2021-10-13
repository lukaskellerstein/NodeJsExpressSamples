function main() {

    // Implement Binary Tree (not BST)
    // Create 3 instances of Binary Tree
    // Tree1 
    //    5
    //   / \
    //  6   7
    // / \ / \
    //8  9 10 11
    // Tree2 
    //  6   
    // / \  
    //8  9  
    // Tree3
    //    5
    //   / \
    //  99  100
    // Implement method for checking if trees are the same
    // Implement method for checking if tree is subtree of another tree
    // Implement method for converting tree to mirror tree
    // Implement method for checking if tree is mirror tree of another tree
    // Implement method for sum tree


    // -------------------------------------
    // implement here

    class TreeNode {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }


    //    5
    //   / \
    //  6   7
    // / \ / \
    //8  9 10 11

    var rootNode1 = new TreeNode(5);
    rootNode1.left = new TreeNode(6);
    rootNode1.right = new TreeNode(7);

    rootNode1.left.left = new TreeNode(8);
    rootNode1.left.right = new TreeNode(9);

    rootNode1.right.left = new TreeNode(10);
    rootNode1.right.right = new TreeNode(11);

    //  6   
    // / \  
    //8   9  

    var rootNode2 = new TreeNode(6);
    rootNode2.left = new TreeNode(8);
    rootNode2.right = new TreeNode(9);

    //    5
    //   / \
    //  99  100

    var rootNode3 = new TreeNode(5);
    rootNode3.left = new TreeNode(99);
    rootNode3.right = new TreeNode(100);


    // ARE TREES THE SAME? ----------------------------------

    // basic version
    const isSameTree = (a, b) => {

        if (a === null && b === null) {
            return true;
        }

        if (a === null && b !== null) {
            return false;
        }

        if (a !== null && b === null) {
            return false;
        }

        if (a.value === b.value) {

            let leftResult = isSameTree(a.left, b.left);
            let rightResult = isSameTree(a.right, b.right);

            return leftResult & rightResult;
        } else {
            return false;
        }
    }

    // with help of preorder
    const isSameTree_preorder = (tree1, tree2) => {

        const preorder = (node) => {
            let result = [];

            if (node != null) {

                //center
                result.push(node.value)

                //left
                let left = preorder(node.left);
                result = [...result, ...left];

                //right
                let right = preorder(node.right);
                result = [...result, ...right];

            }

            return result;
        }

        //preorder check
        let preRes1 = preorder(tree1);
        let preRes2 = preorder(tree2);
        let preRes = preRes1.join("") === preRes2.join("")

        return preRes;
    }

    // with help of inorder
    const isSameTree_inorder = (tree1, tree2) => {

        const inorder = (node) => {
            let result = [];

            if (node != null) {

                //left
                let left = inorder(node.left);
                result = [...result, ...left];

                //center
                result.push(node.value)

                //right
                let right = inorder(node.right);
                result = [...result, ...right];

            }

            return result;
        }

        //inorder check
        let preRes1 = inorder(tree1);
        let preRes2 = inorder(tree2);
        let preRes = preRes1.join("") === preRes2.join("")

        return preRes;
    }

    // with help of postorder
    const isSameTree_postorder = (tree1, tree2) => {

        const postorder = (node) => {
            let result = [];

            if (node != null) {

                //left
                let left = postorder(node.left);
                result = [...result, ...left];

                //right
                let right = postorder(node.right);
                result = [...result, ...right];

                //center
                result.push(node.value)

            }

            return result;
        }

        //postorder check
        let preRes1 = postorder(tree1);
        let preRes2 = postorder(tree2);
        let preRes = preRes1.join("") === preRes2.join("")

        return preRes;
    }

    // Is Subtree? ------------------------------------------
    const isSubtree = (a, b) => {

        if (b === null) {
            return true;
        }

        if (a === null) {
            return false;
        }

        if (isSameTree(a, b)) {
            return true;
        }

        let leftResult = isSubtree(a.left, b);
        let rightResult = isSubtree(a.right, b);

        if (leftResult || rightResult) {
            return true;
        } else {
            return false;
        }
    }

    // Convert to mirror tree ----------------------------------
    const mirrorTree = (a) => {

        if (a === null) {
            return null;
        }

        // no children
        if (a.left === null && a.right === null) {
            return a;
        }

        //one child
        if (a.left !== null && a.right === null) {
            a.right = a.left;
        }
        if (a.left === null && a.right !== null) {
            a.left = a.right;
        }

        //two children
        if (a.left !== null && a.right !== null) {
            var left = a.left;
            var right = a.right;

            a.left = mirrorTree(right);
            a.right = mirrorTree(left);
        }

        return a;
    }

    // CHECK IF IT IS A MIRROR TREE ----------------------------
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

    // CONVERT TO SUM TREE - EASY ----------------------------------
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



    // -------------------------------------
    // TEST data

    // is same?
    console.log(isSameTree(rootNode1, rootNode2));
    console.log(isSameTree(rootNode1, rootNode1));
    // is same? preorder
    console.log(isSameTree_preorder(rootNode1, rootNode2));
    console.log(isSameTree_preorder(rootNode1, rootNode1));
    // is same? inorder
    console.log(isSameTree_inorder(rootNode1, rootNode2));
    console.log(isSameTree_inorder(rootNode1, rootNode1));
    // is same? postorder
    console.log(isSameTree_postorder(rootNode1, rootNode2));
    console.log(isSameTree_postorder(rootNode1, rootNode1));

    // is subtree?
    console.log(isSubtree(rootNode1, rootNode3));
    console.log(isSubtree(rootNode1, rootNode2));

    // create a mirror tree
    let mirrorRootNode1 = mirrorTree(rootNode1);
    console.log(mirrorRootNode1);

    // check if mirror tree
    console.log(checkIfMirrorTree(rootNode1, mirrorRootNode1));
    console.log(checkIfMirrorTree(rootNode2, mirrorRootNode1));

    // sum tree
    console.log(sumTree(rootNode1));
};
main();