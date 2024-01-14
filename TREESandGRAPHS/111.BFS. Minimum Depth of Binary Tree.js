// class Solution {
//   public int minDepth(TreeNode root) {
//       if (root == null) {
//           return 0;
//       }
      
//       Queue<TreeNode> q = new LinkedList<>();
//       q.add(root);
//       int depth = 1;
      
//       while (q.isEmpty() == false) {
//           int qSize = q.size();
          
//           while (qSize > 0) {
//               qSize--;
              
//               TreeNode node = q.remove();
//               // Since we added nodes without checking null, we need to skip them here.
//               if (node == null) {
//                   continue;
//               }
              
//               // The first leaf would be at minimum depth, hence return it.
//               if (node.left == null && node.right == null) {
//                   return depth;
//               }
              
//               q.add(node.left);
//               q.add(node.right);
//           }
//           depth++;
//       }
//       return -1;
//   }
// };


//https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/1439829/js-heavily-commented-bfs-and-dfs-solution/
// JS DE LEETCODE

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return [];
  
  let queue = [root];
  let depth = 1;
  
  while (queue[0]) {
      let size = queue.length;
      
      while (size--) {
          let curr = queue.shift(); // dequeue
          if (!curr.left && !curr.right) return depth;
          
          if (curr.left) queue.push(curr.left); // enqueue
          if (curr.right) queue.push(curr.right); // enqueue
          
      }
      
      depth++;
  }
};