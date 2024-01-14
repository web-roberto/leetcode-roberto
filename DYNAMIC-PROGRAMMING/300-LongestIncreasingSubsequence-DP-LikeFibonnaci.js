class Solution {
  lengthOfLIS(nums) {
    const dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    return Math.max(...dp);
  }
}
const solucion= new Solution()
console.log('----', solucion.lengthOfLIS([5, 6, 7, 8, 1, 2, 3])) //[5,6,7,8], que son 4