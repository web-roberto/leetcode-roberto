class Solution {
  constructor() {
      this.memo = new Map();
  }
  
  minCostClimbingStairs(cost) {
      return this.minimumCost(cost.length, cost);
  }
  
  minimumCost(i, cost) {
      if (i <= 1) {
          return 0;
      }
      
      if (this.memo.has(i)) {
          return this.memo.get(i);
      }
      
      let downOne = cost[i - 1] + this.minimumCost(i - 1, cost);
      let downTwo = cost[i - 2] + this.minimumCost(i - 2, cost);
      this.memo.set(i, Math.min(downOne, downTwo));
      return this.memo.get(i);
  }
}
//Input: cost = [10,15,20] -> Output: 15
// Input: cost = [1,100,1,1,1,100,1,1,100,1] ->Output: 6
const solution= new Solution()
console.log('---solucion--',solution.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))