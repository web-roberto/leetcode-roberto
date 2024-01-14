/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) {
      return [];
  }
  
  let ans = [];
  let queue = [root];

  while (queue.length) {
      let currentLength = queue.length;
      let currMax = -Infinity; // this will store the largest value for the current level
      let nextQueue = [];

      for (let i = 0; i < currentLength; i++) {
          let node = queue[i];
          currMax = Math.max(currMax, node.val);
          if (node.left) {
              nextQueue.push(node.left);
          }
          if (node.right) {
              nextQueue.push(node.right);
          }
      }
      
      ans.push(currMax);
      queue = nextQueue;
  }
  
  return ans;
};