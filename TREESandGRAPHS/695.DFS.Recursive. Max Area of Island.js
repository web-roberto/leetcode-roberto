//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages
// load into a Map structure (adjacence list)
// we do not load from input array to a Map of adjacence list because we already know
// who are the neighbours (the four nodes around it)
// seen is array 2D

class Solution {
  constructor() {
      this.grid = [];
      this.seen = [];
  }
  
  area(r, c) {
      if (r < 0 || r >= this.grid.length || c < 0 || c >= this.grid[0].length ||
              this.seen[r][c] || this.grid[r][c] === 0) {
          return 0;
      }
      this.seen[r][c] = true;
      return (1 + this.area(r+1, c) + this.area(r-1, c)
                + this.area(r, c-1) + this.area(r, c+1));
  }
  
  maxAreaOfIsland(grid) {
      this.grid = grid;
      // seen (array 2D)
      this.seen = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));
      let ans = 0;
      for (let r = 0; r < grid.length; r++) {
          for (let c = 0; c < grid[0].length; c++) {
              ans = Math.max(ans, this.area(r, c));
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