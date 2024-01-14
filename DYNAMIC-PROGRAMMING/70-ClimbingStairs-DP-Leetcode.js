class Solution {
  climbStairs(n) {
    const memo = {};

    function dp(i) {
      if (i <= 2) {
        return i;
      }
      if (!(i in memo)) {
        // Instead of just returning dp(i - 1) + dp(i - 2), calculate it once and then
        // store the result inside an object to refer to in the future.
        memo[i] = dp(i - 1) + dp(i - 2);
      }
      return memo[i];
    }

    return dp(n);
  }
}
const solution= new Solution()
console.log('--Climbing Stairs-',solution.climbStairs(5))