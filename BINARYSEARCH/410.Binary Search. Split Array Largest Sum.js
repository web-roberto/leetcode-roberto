
class Solution {
  minimumSubarraysRequired(nums, maxSumAllowed) {
      let currentSum = 0;
      let splitsRequired = 0;
      for (let element of nums) {
          if (currentSum + element <= maxSumAllowed) {
              currentSum += element;
          } else {
              currentSum = element;
              splitsRequired++;
          }
      }
      return splitsRequired + 1;
  }
  
  splitArray(nums, m) {
      let sum = 0;
      let maxElement = Number.MIN_SAFE_INTEGER;
      for (let element of nums) {
          sum += element;
          maxElement = Math.max(maxElement, element);
      }
      
      let left = maxElement;
      let right = sum;
      let minimumLargestSplitSum = 0;
      while (left <= right) {
          let maxSumAllowed = left + Math.floor((right - left) / 2);
          
          if (this.minimumSubarraysRequired(nums, maxSumAllowed) <= m) {
              right = maxSumAllowed - 1;
              minimumLargestSplitSum = maxSumAllowed;
          } else {
              left = maxSumAllowed + 1;
          }
      }
      return minimumLargestSplitSum;
  }
}

const ans = new Solution()
const nums = [7,2,5,10,8]
const k = 2
console.log(ans.splitArray(nums,k))

// Example 1:
// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
// Example 2:
// Input: nums = [1,2,3,4,5], k = 2
// Output: 9
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
