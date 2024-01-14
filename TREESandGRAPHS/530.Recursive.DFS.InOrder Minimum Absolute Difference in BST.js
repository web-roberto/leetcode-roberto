/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let dfs = node => {
      if (!node) {
          return;
      }
      
      dfs(node.left);
      values.push(node.val);
      dfs(node.right);
  }
  
  let values = [];
  dfs(root);
  let ans = Infinity;
  for (let i = 1; i < values.length; i++) {
      ans = Math.min(ans, values[i] - values[i - 1]);
  }
  
  return ans;
};