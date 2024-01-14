/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let stack = [root]; 
    let ans = 0;
    while (stack.length) {
        let node = stack.pop();
        if (low <= node.val && node.val <= high) {
            ans += node.val;
        }
        if (node.left && low < node.val) {
            stack.push(node.left);
        }
        if (node.right && node.val < high) {
            stack.push(node.right);
        }
    }

    return ans;
};