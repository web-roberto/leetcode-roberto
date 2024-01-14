/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// BFS con cola (array), queue with items like [row,col]
// 'seen' array 2D
//reusa el argunento mat
var updateMatrix = function(mat) {
  let valid = (row, col) => {
      return 0 <= row && row < m && 0 <= col && col < n && mat[row][col] == 1;
  }
  
  // if you don't want to modify the input, you can create a copy at the start
  m = mat.length;
  n = mat[0].length;
  let queue = []; //items like [row,col]
  let seen = [];
  for (let i = 0; i < m; i++) {
      seen.push(new Array(n).fill(false));
  }
  //1st step: the 0's to the queue
  for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
          if (mat[row][col] == 0) {
              queue.push([row, col]);
              seen[row][col] = true;
          }
      }
  }
  
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let steps = 0;
  
  while (queue.length) {
      let currentLength = queue.length;
      let nextQueue = [];
      steps++;
      
      for (let i = 0; i < currentLength; i++) {
          const [row, col] = queue[i];
          for (const [dx, dy] of directions) {
              let nextRow = row + dy, nextCol = col + dx;
              if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                  seen[nextRow][nextCol] = true;
                  nextQueue.push([nextRow, nextCol]);
                  mat[nextRow][nextCol] = steps;
              }
          }
      }
      
      queue = nextQueue;
  }
  
  return mat;
};
const mat = [[0,0,0],[0,1,0],[0,0,0]]
updateMatrix(mat)
// Example 1:
//const mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:
const mat2 = [[0,0,0],[0,1,0],[1,1,1]]
updateMatrix(mat2)

// Output: [[0,0,0],[0,1,0],[1,2,1]]
