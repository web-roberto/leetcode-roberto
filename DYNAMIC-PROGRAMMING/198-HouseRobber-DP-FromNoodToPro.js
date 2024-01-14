// https://leetcode.com/problems/house-robber/solutions/1491888/javascript-from-noob-to-pro/
// // O(2^n) time | O(2^n) space -> RECURSION (NAIVE)
// var rob = function(nums, idx = 0) {
//   if (idx >= nums.length) {
//       return 0;
//   }
  
//   const sumIfSkipped = rob(nums, idx + 1);
//   const sumIfRobbed = nums[idx] + rob(nums, idx + 2);
  
//   return Math.max(sumIfSkipped, sumIfRobbed);
// };

// [ 2, 7, 9, 3, 1 ]
// O(n) time | O(n) space
var rob = function(nums, idx = 0, memo = {}) {
  if (idx in memo) {
      return memo[idx];
  }
  
  if (idx >= nums.length) {
      return 0;
  }
  
  const sumIfSkipped = rob(nums, idx + 1, memo);
  const sumIfRobbed = nums[idx] + rob(nums, idx + 2, memo);
  console.log('--indice:',idx,'--- si no robo en esta: ---',sumIfSkipped,'--si robo en esta:', sumIfRobbed)
  return memo[idx] = Math.max(sumIfSkipped, sumIfRobbed);
};
 
console.log(rob( [ 2, 7, 9, 3, 1 ])) //2,9,1