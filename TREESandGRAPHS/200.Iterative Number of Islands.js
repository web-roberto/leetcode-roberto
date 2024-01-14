/**
 * @param {character[][]} grid
 * @return {number}
 */

//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages

// los DFS ITERATIVOS USAN LA PILA, LOS RECURSIVOS NO.

let numIslands = function(grid) {
  let valid = (row, col) => {
      return 0 <= row && row < m && 0 <= col && col < n && grid[row][col] == "1";
  }
  
  let dfs = (startRow, startCol) => {
      stack = [[startRow, startCol]]
      while (stack.length) {
          const [row, col] = stack.pop();
          for (const [dx, dy] of directions) {
              let nextRow = row + dy, nextCol = col + dx;
              if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                  seen[nextRow][nextCol] = true;
                  stack.push([nextRow, nextCol]);
              }
          }
      }
  }
  
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let m = grid.length;
  let n = grid[0].length;
  let seen = [];
  
  for (let i = 0; i < m; i++) {
      seen.push(new Array(n).fill(false));
  }
  
  let ans = 0;
  for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
          if (grid[row][col] == "1" && !seen[row][col]) {
              ans++;
              seen[row][col] = true;
              dfs(row, col);
          }
      }
  }
  
  return ans;
};
const matriz=[[1,1,0,0,0,1],[0,1,0,0,0,0],[0,1,1,0,1,1],[0,0,0,0,0,1],[1,1,1,1,0,1],[1,1,1,1,0,1]]
console.log('The number of islands is',numIslands(matriz))
