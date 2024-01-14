/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let stack = [[root, -Infinity, Infinity]];
  while (stack.length) {
      let [node, small, large] = stack.pop();
      if (small >= node.val || node.val >= large) {
          return false;
      }
      
      if (node.left) {
          stack.push([node.left, small, node.val]);
      }
      if (node.right) {
          stack.push([node.right, node.val, large]);
      }
  }
  
  return true;
};