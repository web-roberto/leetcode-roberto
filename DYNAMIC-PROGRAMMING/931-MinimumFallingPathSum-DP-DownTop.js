
class Solution {
    minFallingPathSum(matrix) {
        let dp = new Array(matrix.length + 1);
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(matrix.length + 1);
        }
        for (let row = matrix.length - 1; row >= 0; row--) {
            for (let col = 0; col < matrix.length; col++) {
                if (col === 0) {
                    dp[row][col] =
                        Math.min(dp[row + 1][col], dp[row + 1][col + 1]) + matrix[row][col];
                } else if (col === matrix.length - 1) {
                    dp[row][col] =
                        Math.min(dp[row + 1][col], dp[row + 1][col - 1]) + matrix[row][col];
                } else {
                    dp[row][col] = Math.min(dp[row + 1][col],
                        Math.min(dp[row + 1][col + 1], dp[row + 1][col - 1])) + matrix[row][col];
                }
            }
        }
        let minFallingSum = Number.MAX_VALUE;
        for (let startCol = 0; startCol < matrix.length; startCol++) {
            minFallingSum = Math.min(minFallingSum, dp[0][startCol]);
        }
        return minFallingSum;
    }
}





//Entrada: matriz = [[2,1,3],[6,5,4],[7,8,9]] ->Salida: 13
//Entrada: matriz = [[-19,57],[-40,-5]] ->Salida: -59

const solution= new Solution()
console.log('--MinPahtSum-',solution.minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]))