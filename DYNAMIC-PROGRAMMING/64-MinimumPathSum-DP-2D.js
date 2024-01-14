class Solution {
  minPathSum(grid) {
      let dp = new Array(grid.length);
      for (let i = 0; i < grid.length; i++) {
          dp[i] = new Array(grid[0].length);
      }
      
      for (let i = grid.length - 1; i >= 0; i--) {
          for (let j = grid[0].length - 1; j >= 0; j--) {
              if (i === grid.length - 1 && j !== grid[0].length - 1) {
                  dp[i][j] = grid[i][j] + dp[i][j + 1];
              } else if (j === grid[0].length - 1 && i !== grid.length - 1) {
                  dp[i][j] = grid[i][j] + dp[i + 1][j];
              } else if (j !== grid[0].length - 1 && i !== grid.length - 1) {
                  dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
              } else {
                  dp[i][j] = grid[i][j];
              }
          }
      }
      
      return dp[0][0];
  }
}





// Entrada: cuadrícula = [[1,3,1],[1,5,1],[4,2,1]] -> Salida: 7
// Entrada: cuadrícula = [[1,2,3],[4,5,6]] -> Salida: 12
const solution= new Solution()
console.log('--MinPahtSum-',solution.minPathSum([[1,3,1],[1,5,1],[4,2,1]]))