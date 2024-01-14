// class Solution {
//   private int dfs(TreeNode root) {
//       if (root == null) {
//           return 0;
//       }
      
//       // If only one of child is non-null, then go into that recursion.
//       if (root.left == null) {
//           return 1 + dfs(root.right);
//       } else if (root.right == null) {
//           return 1 + dfs(root.left);
//       }
      
//       // Both children are non-null, hence call for both children.
//       return 1 + Math.min(dfs(root.left), dfs(root.right));
//   }
  
//   public int minDepth(TreeNode root) {
//       return dfs(root);
//   }
// }


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
  // If node is empty return 0
  if (!root) return 0;
  
  // If the left node is empty DFS into right node
  if (!root.left) return minDepth(root.right) + 1;
  
  // If the right node is empty DFS into left node
  if (!root.right) return minDepth(root.left) + 1;
  
  // If neither left nor right nodes are empty, find the minium of the each DFS traversal
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};