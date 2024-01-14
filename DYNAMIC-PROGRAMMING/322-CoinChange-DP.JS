class Solution {
  coinChange(coins, amount) {
      const memo = new Map();
      
      function dfs(rem) {
          if (rem < 0) {
              return -1;
          }
          if (rem === 0) {
              return 0;
          }
          if (memo.has(rem)) {
              return memo.get(rem);
          }
          let minCost = Infinity;
          for (let coin of coins) {
              let res = dfs(rem - coin);
              if (res !== -1) {
                  minCost = Math.min(minCost, res + 1);
              }
          }
          memo.set(rem, minCost !== Infinity ? minCost : -1);
          return memo.get(rem);
      }
      
      return dfs(amount);
  }
}
//Input: 
const coins = [1,2,5]
const amount = 11 
//-> Output: 3
// Input: coins = [2], amount = 3 -> Output: -1
// Input: coins = [1], amount = 0 -> Output: 0

const solution= new Solution()
console.log('---solution is-',solution.coinChange(coins,amount))