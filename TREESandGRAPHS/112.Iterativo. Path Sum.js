/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    
    let stack = [[root, 0]];
    while (stack.length) {
        let [node, curr] = stack.pop();
        // if both children are null, then the node is a leaf
        if (!node.left && !node.right) {
            if (curr + node.val == targetSum) {
                return true;
            }
        }
        
        curr += node.val;
        if (node.left) {
            stack.push([node.left, curr]);
        }
        if (node.right) {
            stack.push([node.right, curr]);
        }
    }
    
    return false;
};