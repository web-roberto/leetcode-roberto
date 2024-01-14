//https://leetcode.com/problems/delete-and-earn/editorial/
class Solution {
  deleteAndEarn(nums) {
      const points = {};
      let maxNumber = 0;
      
      // Precompute how many points we gain from taking an element
      for (const num of nums) {
          points[num] = (points[num] || 0) + num;
          maxNumber = Math.max(maxNumber, num);
      }

      const memo = {};
      function maxPoints(num) {
          // Check for base cases
          if (num === 0) {
              return 0;
          }
          if (num === 1) {
              return points[1] || 0;
          }
          
          // Apply recurrence relation
          if (memo[num] !== undefined) {
              return memo[num];
          }
          memo[num] = Math.max(maxPoints(num - 1), maxPoints(num - 2) + (points[num] || 0));
          return memo[num];
      }
      
      return maxPoints(maxNumber);
  }
}
// nums = [3,4,2] -> 6
// nums = [2,2,3,3,3,4] -> 9
const solution =new Solution()
console.log('----',solution.deleteAndEarn([2,2,3,3,3,4]))