/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let dfs = (node, curr) => {
      if (!node) {
          return false;
      }
      
      // if both children are null, then the node is a leaf
      if (!node.left && !node.right) {
          return (curr + node.val) == targetSum;
      }
      
      curr += node.val;
      let left = dfs(node.left, curr);
      let right = dfs(node.right, curr);
      return left || right;
  }
  
  return dfs(root, 0);
};