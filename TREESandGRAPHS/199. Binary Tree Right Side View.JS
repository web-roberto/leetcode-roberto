/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) {
      return [];
  }
  
  let ans = [];
  let queue = [root];

  while (queue.length) {
      let nodesInCurrentLevel = queue.length;
      let nextQueue = [];
      
      ans.push(queue[queue.length - 1].val); // this is the rightmost node for the current level
      for (let i = 0; i < nodesInCurrentLevel; i++) {
          let node = queue[i];
          if (node.left) {
              nextQueue.push(node.left);
          }
          if (node.right) {
              nextQueue.push(node.right);
          }
      }
      
      queue = nextQueue;
  }
  
  return ans;
};
