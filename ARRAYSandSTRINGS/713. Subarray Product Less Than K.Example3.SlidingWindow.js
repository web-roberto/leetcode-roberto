/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) {
      return 0;
  }

  let ans = 0, left = 0, curr = 1;
  //curr is the current product
  for (let right = 0; right < nums.length; right++) {
      curr *= nums[right];
      while (curr >= k) {
          curr /= nums[left];
          left++;
      }
      
      ans += right - left + 1;
  }
  
  return ans;
};