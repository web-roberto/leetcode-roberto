/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findBestSubarray = function(nums, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
      curr += nums[i];
  }
  
  let ans = curr;
  for (let i = k; i < nums.length; i++) {
      curr += nums[i] - nums[i - k]; //I add the next and I substract the last
      ans = Math.max(ans, curr);
  }
  
  return ans;
}