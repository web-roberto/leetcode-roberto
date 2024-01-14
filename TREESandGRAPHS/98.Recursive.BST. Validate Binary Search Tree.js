/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let dfs = (node, small, large) => {
      if (!node) {
          return true;
      }
      
      if (small >= node.val || node.val >= large) {
          return false;
      }
      
      let left = dfs(node.left, small, node.val);
      let right = dfs(node.right, node.val, large);
      
      // tree is a bst if left and right subtrees are also BSTs
      return left && right;
  }
  
  return dfs(root, -Infinity, Infinity);
};