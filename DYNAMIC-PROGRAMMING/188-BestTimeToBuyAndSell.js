class Solution {
  maxProfit(k, prices) {
    const n = prices.length;

    // solve special cases
    if (!prices.length || k === 0) {
      return 0;
    }

    if (Math.floor(k / 2) > n) {
      let res = 0;
      for (let i = 1; i < prices.length; i++) {
        res += Math.max(0, prices[i] - prices[i - 1]);
      }
      return res;
    }

    // dp[i][used_k][ishold] = balance
    // ishold: 0 nothold, 1 hold
    const dp = Array.from({ length: n }, () =>
      Array.from({ length: k + 1 }, () => [-Infinity, -Infinity])
    );

    // set starting value
    dp[0][0][0] = 0;
    dp[0][1][1] = -prices[0];

    // fill the array
    for (let i = 1; i < n; i++) {
      for (let j = 0; j <= k; j++) {
        // transition equation
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
        // you can't hold stock without any transaction
        if (j > 0) {
          dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
        }
      }
    }

    let res = 0;
    for (let j = 0; j <= k; j++) {
      res = Math.max(res, dp[n - 1][j][0]);
    }
    return res;
  }
}
const solution= new Solution()
console.log('---solucion--',solution.maxProfit(3,[3,2,8,7,1,6,7,5,7,2,7,8,3,5,4,2]))