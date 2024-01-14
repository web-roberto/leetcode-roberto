var isSameTree = function(p, q) {
  if (p == null && q == null) {
      return true;
  }
  
  if (p == null || q == null) {
      return false;
  }
  
  if (p.val != q.val) {
      return false;
  }
  
  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);
  return left && right;
};