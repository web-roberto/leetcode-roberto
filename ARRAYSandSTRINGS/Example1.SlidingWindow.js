// ENUNCIADO
//Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k. This is the problem we have been talking about above. We will now formally solve it.
// this algorithm has a time complexity of O(n) since all work done inside the for loop is amortized O(1), where 
// n is the length of nums
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findLength = function(nums, k) {
  // curr is the current sum of the window
  let left = 0, curr = 0, ans = 0;
  for (let right = 0; right < nums.length; right++) {
      curr += nums[right];
      while (curr > k) {
          curr -= nums[left];
          left++;
      }
      
      ans = Math.max(ans, right - left + 1);
  }
  
  return ans;
}