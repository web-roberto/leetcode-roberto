class Solution {
  minCostClimbingStairs(cost) {
    const memo = {};

    function minimumCost(i) {
      // Base case, we are allowed to start at either step 0 or step 1
      if (i <= 1) {
        return 0;
      }

      // Check if we have already calculated minimumCost(i)
      if (memo[i] !== undefined) {
        return memo[i];
      }

      // If not, cache the result in our hash map and return it
      const downOne = cost[i - 1] + minimumCost(i - 1);
      const downTwo = cost[i - 2] + minimumCost(i - 2);
      memo[i] = Math.min(downOne, downTwo);
      return memo[i];
    }

    return minimumCost(cost.length);
  }
}const solution= new Solution()
console.log('---solucion--',solution.minCostClimbingStairs([1,3,2,5,6,10,4]))