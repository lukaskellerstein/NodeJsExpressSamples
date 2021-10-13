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

    // start 08:28
    // end 09:07

    // -------------------------------------
    // implement here


    //    5
    //   / \
    //  6   7
    // / \ / \
    //8  9 10 11

    //  6   
    // / \  
    //8   9  

    //    5
    //   / \
    //  99  100


    // ARE TREES THE SAME? ----------------------------------

    // basic version
    // with help of preorder
    // with help of inorder
    // with help of postorder


    // Is Subtree? ------------------------------------------


    // Convert to mirror tree ----------------------------------

    // CHECK IF IT IS A MIRROR TREE ----------------------------


    // CONVERT TO SUM TREE - EASY ----------------------------------


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

    // sum tree - 56
    console.log(sumTree(rootNode1));
};
main();