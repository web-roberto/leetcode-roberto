class Solution {
  maximalSquare(matrix) {
      let rows = matrix.length;
      let cols = rows > 0 ? matrix[0].length : 0;
      let dp = new Array(rows + 1).fill(0).map(() => new Array(cols + 1).fill(0));
      let maxsqlen = 0;

      for (let i = 1; i <= rows; i++) {
          for (let j = 1; j <= cols; j++) {
              if (matrix[i-1][j-1] === '1') {
                  dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
                  maxsqlen = Math.max(maxsqlen, dp[i][j]);
              }
          }
      }
      return maxsqlen * maxsqlen;
  }
}

//Input: 
const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
//Output: 4
//Input: 
//const matrix = [["0","1"],["1","0"]]
//Output: 1
const solution= new Solution()
console.log('---- solution',solution.maximalSquare(matrix))



