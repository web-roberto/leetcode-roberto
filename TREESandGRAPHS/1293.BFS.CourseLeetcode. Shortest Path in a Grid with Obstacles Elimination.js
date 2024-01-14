/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages
// load into a Map structure (adjacence list)
// we do not load from input array to a Map of adjacence list because we already know
// who are the neighbours (the four nodes around it)

//BFS usa cola

let shortestPath = function(grid, k) {
  let valid = (row, col) => {
      return 0 <= row && row < m && 0 <= col && col < n;
  }
  
  let m = grid.length;
  let n = grid[0].length;
  let queue = [[0, 0, k]];
  let seen = [];
  for (let i = 0; i < m; i++) {
    debugger
      seen.push([]);
      for (let j = 0 ; j < n; j++) {
          seen[i].push(new Array(k + 1).fill(-1));
      }
  }
  
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let steps = 0;
  
  while (queue.length) {
      let currentLength = queue.length;
      let nextQueue = [];
      
      for (let i = 0; i < currentLength; i++) {
        debugger
          let [row, col, remain] = queue[i];
          if (row == m - 1 && col == n - 1) {
              return steps;
          }

          // if the current square is an obstacle, we need to spend one of our removals
          if (grid[row][col] == 1) {
              if (remain == 0) {
                  continue;
              } else {
                  remain--;
              }
          }

          // if the square has already been visited, but with more removals, then the current
          // path is pointless, since more removals is better
          if (seen[row][col] >= remain) {
              continue;
          }

          seen[row][col] = remain;
          for (const [dx, dy] of directions) {
              let nextRow = row + dy, nextCol = col + dx;
              if (valid(nextRow, nextCol)) {
                  nextQueue.push([nextRow, nextCol, remain]);
              }
          }
      }
      
      queue = nextQueue;
      steps++;
  }
  
  return -1;
};

const grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]]
const k=1
shortestPath(grid,k)
// Example1:
// Output: 6
// Explanation: 
// The shortest path without eliminating any obstacle is 10.
// The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).

// Example2:
// Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
// Output: -1
// Explanation: We need to eliminate at least two obstacles to find such a walk.