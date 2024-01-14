class Solution {
  maxSubArray(nums) {
      let currentSubarray = nums[0];
      let maxSubarray = nums[0];
      
      for (let i = 1; i < nums.length; i++) {
          let num = nums[i];
          
          currentSubarray = Math.max(num, currentSubarray + num);
          maxSubarray = Math.max(maxSubarray, currentSubarray);
      }
      return maxSubarray;
  }
}
//Input: nums = [-2,1,-3,4,-1,2,1,-5,4] -> Output: 6
//Input: nums = [1] -> Output: 1
//Input: nums = [5,4,-1,7,8] ->Output: 23
const solution= new Solution()
console.log('---solucion--',solution.maxSubArray([5,4,-1,7,8]))