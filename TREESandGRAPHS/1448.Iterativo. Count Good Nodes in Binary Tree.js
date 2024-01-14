/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
  if (!root) {
      return 0;
  }
  
  let stack = [[root, -Infinity]];
  let ans = 0;

  while (stack.length) {
      let [node, maxSoFar] = stack.pop();
      if (node.val >= maxSoFar) {
          ans++;
      }
      
      if (node.left) {
          stack.push([node.left, Math.max(maxSoFar, node.val)]);
      }
      if (node.right) {
          stack.push([node.right, Math.max(maxSoFar, node.val)]);
      }
  }

  return ans;
};
