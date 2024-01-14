class Solution {
  minFallingPathSum(matrix) {
      let minFallingSum = Number.MAX_VALUE;
      let memo = new Array(matrix.length);
      for (let i = 0; i < matrix.length; i++) {
          memo[i] = new Array(matrix[0].length);
      }
      
      for (let startCol = 0; startCol < matrix.length; startCol++) {
          minFallingSum = Math.min(minFallingSum,
              this.findMinFallingPathSum(matrix, 0, startCol, memo));
      }
      return minFallingSum;
  }
  
  findMinFallingPathSum(matrix, row, col, memo) {
      if (col < 0 || col === matrix.length) {
          return Number.MAX_VALUE;
      }
      
      if (row === matrix.length - 1) {
          return matrix[row][col];
      }
      
      if (memo[row][col] !== undefined) {
          return memo[row][col];
      }
      
      let left = this.findMinFallingPathSum(matrix, row + 1, col, memo);
      let middle = this.findMinFallingPathSum(matrix, row + 1, col + 1, memo);
      let right = this.findMinFallingPathSum(matrix, row + 1, col - 1, memo);
      memo[row][col] = Math.min(left, Math.min(middle, right)) + matrix[row][col];
      return memo[row][col];
  }
}



//Entrada: matriz = [[2,1,3],[6,5,4],[7,8,9]] ->Salida: 13
//Entrada: matriz = [[-19,57],[-40,-5]] ->Salida: -59

const solution= new Solution()
console.log('--MinPahtSum-',solution.minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]))