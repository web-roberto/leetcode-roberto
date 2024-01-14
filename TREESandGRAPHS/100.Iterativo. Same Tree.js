var isSameTree = function(p, q) {
  let stack = [[p, q]];
  
  while (stack.length) {
      let [p, q] = stack.pop();
      
      if (p == null && q == null) {
          continue;
      }

      if (p == null || q == null) {
          return false;
      }

      if (p.val != q.val) {
          return false;
      }
      
      stack.push([p.left, q.left]);
      stack.push([p.right, q.right]);
  }

  return true;
};