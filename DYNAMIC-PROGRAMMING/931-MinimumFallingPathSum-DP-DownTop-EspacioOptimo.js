
class Solution {
    minFallingPathSum(matrix) {
        let dp = new Array(matrix.length + 1);
        for (let row = matrix.length - 1; row >= 0; row--) {
            let currentRow = new Array(matrix.length + 1);
            for (let col = 0; col < matrix.length; col++) {
                if (col === 0) {
                    currentRow[col] =
                        Math.min(dp[col], dp[col + 1]) + matrix[row][col];
                } else if (col === matrix.length - 1) {
                    currentRow[col] =
                        Math.min(dp[col], dp[col - 1]) + matrix[row][col];
                } else {
                    currentRow[col] = Math.min(dp[col],
                        Math.min(dp[col + 1], dp[col - 1])) + matrix[row][col];
                }
            }
            dp = currentRow;
        }
        let minFallingSum = Number.MAX_VALUE;
        for (let startCol = 0; startCol < matrix.length; startCol++) {
            minFallingSum = Math.min(minFallingSum, dp[startCol]);
        }
        return minFallingSum;
    }
}






//Entrada: matriz = [[2,1,3],[6,5,4],[7,8,9]] ->Salida: 13
//Entrada: matriz = [[-19,57],[-40,-5]] ->Salida: -59

const solution= new Solution()
console.log('--MinPahtSum-',solution.minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]))