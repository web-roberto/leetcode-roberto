/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let iterativeInorder = root => {
        let stack = [];
        let values = [];
        let curr = root;
        
        while (stack.length || curr) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.pop();
                values.push(curr.val);
                curr = curr.right;
            }
        }
        
        return values;
    }
    
    let values = iterativeInorder(root);
    let ans = Infinity;
    for (let i = 1; i < values.length; i++) {
        ans = Math.min(ans, values[i] - values[i - 1]);
    }
    
    return ans;
};