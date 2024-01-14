var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
      return null;
  }
  
  // first case
  if (root == p || root == q) {
      return root;
  }
  
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  
  // second case
  if (left && right) {
      return root;
  }
  
  // third case
  if (left) {
      return left;
  }
  
  return right;
};