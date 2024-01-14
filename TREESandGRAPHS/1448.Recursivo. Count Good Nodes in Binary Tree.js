/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
  let dfs = (node, maxSoFar) => {
      if (!node) {
          return 0;
      }
      
      let left = dfs(node.left, Math.max(maxSoFar, node.val));
      let right = dfs(node.right, Math.max(maxSoFar, node.val));
      let ans = left + right;
      if (node.val >= maxSoFar) {
          ans++;
      }
      
      return ans;
  }
  
  return dfs(root, -Infinity);
};