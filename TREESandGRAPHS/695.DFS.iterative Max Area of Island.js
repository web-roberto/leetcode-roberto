//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages
// load into a Map structure (adjacence list)
// we do not load from input array to a Map of adjacence list because we already know
// who are the neighbours (the four nodes around it)
// seen is array 2D

// DFS ITERATIVE uses Stack (array) pops the node and adds its neighbours (up,down,before,after

class Solution {
  maxAreaOfIsland(grid) {
      let seen = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));
      let dr = [1, -1, 0, 0]; //after, befor
      let dc = [0, 0, 1, -1]; //up, down
      let ans = 0;
      for (let r0 = 0; r0 < grid.length; r0++) {
          for (let c0 = 0; c0 < grid[0].length; c0++) {
              if (grid[r0][c0] === 1 && !seen[r0][c0]) {
                  let shape = 0;
                  let stack = [];
                  stack.push([r0, c0]);
                  seen[r0][c0] = true;
                  while (stack.length > 0) {
                      let node = stack.pop();
                      let r = node[0], c = node[1];
                      shape++;
                      for (let k = 0; k < 4; k++) {
                          let nr = r + dr[k];
                          let nc = c + dc[k];
                          if (0 <= nr && nr < grid.length &&
                                  0 <= nc && nc < grid[0].length &&
                                  grid[nr][nc] === 1 && !seen[nr][nc]) {
                              stack.push([nr, nc]);
                              seen[nr][nc] = true;
                          }
                      }
                  }
                  ans = Math.max(ans, shape);
              }
          }
      }
      return ans;
  }
}
const ans=new Solution()
const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
console.log(ans.maxAreaOfIsland(grid))

// Example 1:
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

const grid2 = [[0,0,0,0,0,0,0,0]]
console.log(ans.maxAreaOfIsland(grid2))

// Example 2:
// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
