class Solution {
  uniquePaths(m, n) {
    let d = new Array(m);
    for(let i = 0; i < m; i++) {
      d[i] = new Array(n).fill(1);
    }
    for(let col = 1; col < m; col++) {
      for(let row = 1; row < n; row++) {
        d[col][row] = d[col - 1][row] + d[col][row - 1];
      }
    }
    return d[m - 1][n - 1];
  }
}

//Input: m = 3, n = 7 -> Output: 28
//Input: m = 3, n = 2 -> Output: 3
const solution= new Solution()
console.log('---solucion--',solution.uniquePaths(3,2))