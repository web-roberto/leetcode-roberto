class Solution {
  tribonacci(n) {
    const dp = { 0: 0, 1: 1, 2: 1 };
    function dfs(i) {
      if (i in dp) {
        return dp[i];
      }
      dp[i] = dfs(i - 1) + dfs(i - 2) + dfs(i - 3);
      return dp[i];
    }
    return dfs(n);
  }
}
const solucion= new Solution()
console.log('--solucion',solucion.tribonacci(6))
