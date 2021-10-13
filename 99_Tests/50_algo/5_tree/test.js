function main() {

    class TreeNode {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }

    var rootNode1 = new TreeNode(26);
    rootNode1.left = new TreeNode(10);
    rootNode1.left.left = new TreeNode(4);
    rootNode1.left.left.right = new TreeNode(30);
    rootNode1.left.right = new TreeNode(6);
    rootNode1.right = new TreeNode(3);
    rootNode1.right.right = new TreeNode(3);

    var rootNode2 = new TreeNode(10);
    rootNode2.left = new TreeNode(4);
    rootNode2.left.right = new TreeNode(30);
    rootNode2.right = new TreeNode(6);



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

        return leftResult || rightResult;
    }


    if (isSubtree(rootNode1, rootNode2))
        console.log("Tree 2 is subtree of Tree 1 ");
    else
        console.log("Tree 2 is not a subtree of Tree 1");


}
main();