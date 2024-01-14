class Solution {
  minFallingPathSum(matrix) {
      let minFallingSum = Number.MAX_VALUE;
      console.log('-----minFallingSum---',minFallingSum)
      for (let startCol = 0; startCol < matrix.length; startCol++) {
        console.log('-----startCol---',startCol)
          minFallingSum = Math.min(minFallingSum, this.findMinFallingPathSum(matrix, 0, startCol));
          console.log('-----minFallingSum---',minFallingSum)


      }
      return minFallingSum;
  }
  findMinFallingPathSum(matrix, row, col) {
    console.log('-----findMinFallingPathSum--matrix',{matrix},'row, ',row,'col-', col)
      if (col < 0 || col === matrix.length) {
          return Number.MAX_VALUE;
      }
      
      if (row === matrix.length - 1) {
          return matrix[row][col];
      }
      
      let left = this.findMinFallingPathSum(matrix, row + 1, col);
      console.log('-----left---',left)
      let middle = this.findMinFallingPathSum(matrix, row + 1, col + 1);
      console.log('-----middle---',middle)
      let right = this.findMinFallingPathSum(matrix, row + 1, col - 1);
      console.log('-----right---',right)
      console.log('-----matrix[row][col]---',matrix[row][col])
      console.log('-----Math.min(middle, right)---',Math.min(middle, right))

      console.log('-----Math.min(left, Math.min(middle, right)) + matrix[row][col]---',Math.min(left, Math.min(middle, right)) + matrix[row][col])
      return Math.min(left, Math.min(middle, right)) + matrix[row][col];
  }
}
//Entrada: matriz = [[2,1,3],[6,5,4],[7,8,9]] ->Salida: 13
//Entrada: matriz = [[-19,57],[-40,-5]] ->Salida: -59

const solution= new Solution()
console.log('--MinPahtSum-',solution.minFallingPathSum([[-19,57],[-40,-5]]))