class Solution {
  calculate(grid, i, j) {
      if (i === grid.length || j === grid[0].length) return Number.MAX_VALUE;
      if (i === grid.length - 1 && j === grid[0].length - 1) return grid[i][j];
      return grid[i][j] + Math.min(this.calculate(grid, i + 1, j), this.calculate(grid, i, j + 1));
  }
  minPathSum(grid) {
      return this.calculate(grid, 0, 0);
  }
}
// Entrada: cuadrícula = [[1,3,1],[1,5,1],[4,2,1]] -> Salida: 7
// Entrada: cuadrícula = [[1,2,3],[4,5,6]] -> Salida: 12
const solution= new Solution()
console.log('--MinPahtSum-',solution.minPathSum([[1,3,1],[1,5,1],[4,2,1]]))