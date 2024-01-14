class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

(function main() {
    /*
    The following code builds a tree that looks like:
        0
      /   \
     1     2
    */
    let root = new TreeNode(0);
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    
    root.left = one;
    root.right = two;
    
    console.log(root.left.val);
    console.log(root.right.val);
}());