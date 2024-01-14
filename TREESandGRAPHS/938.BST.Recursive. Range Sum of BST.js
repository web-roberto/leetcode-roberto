/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  if (!root) {
      return 0;
  }
  
  let ans = 0;
  if (low <= root.val && root.val <= high) {
      ans += root.val;
  }
  if (low < root.val) {
      ans += rangeSumBST(root.left, low, high);
  }
  if (root.val < high) {
      ans += rangeSumBST(root.right, low, high);
  }
  
  return ans;
};