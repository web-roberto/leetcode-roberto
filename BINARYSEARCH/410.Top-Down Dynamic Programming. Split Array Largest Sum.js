
class Solution {
  constructor() {
      this.memo = new Array(1001).fill(0).map(() => new Array(51).fill(-1));
  }
  getMinimumLargestSplitSum(prefixSum, currIndex, subarrayCount) {
      const n = prefixSum.length - 1;
      
      if (this.memo[currIndex][subarrayCount] !== -1) {
          return this.memo[currIndex][subarrayCount];
      }
      if (subarrayCount === 1) {
          return this.memo[currIndex][subarrayCount] = prefixSum[n] - prefixSum[currIndex];
      }
      let minimumLargestSplitSum = Infinity;
      for (let i = currIndex; i <= n - subarrayCount; i++) {
          
          const firstSplitSum = prefixSum[i + 1] - prefixSum[currIndex];
          
          const largestSplitSum = Math.max(firstSplitSum, 
                                    this.getMinimumLargestSplitSum(prefixSum, i + 1, subarrayCount - 1));
          
          minimumLargestSplitSum = Math.min(minimumLargestSplitSum, largestSplitSum);
          if (firstSplitSum >= minimumLargestSplitSum) {
              break;
          }
      }
      return this.memo[currIndex][subarrayCount] = minimumLargestSplitSum;
  }
  
  splitArray(nums, m) {
      
      this.memo = new Array(1001).fill(0).map(() => new Array(51).fill(-1));
      
      const n = nums.length;
      const prefixSum = new Array(n + 1).fill(0);
      for (let i = 0; i < n; i++) {
          prefixSum[i + 1] = prefixSum[i] + nums[i];
      }
      return this.getMinimumLargestSplitSum(prefixSum, 0, m);
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
