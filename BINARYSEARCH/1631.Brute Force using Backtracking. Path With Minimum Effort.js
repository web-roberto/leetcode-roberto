class Solution {
  minimumEffortPath(heights) {
      return this.backtrack(0, 0, heights, heights.length, heights[0].length, 0);
  }
  directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  maxSoFar = Number.MAX_SAFE_INTEGER;
  backtrack(x, y, heights, row, col, maxDifference) {
      if (x === row - 1 && y === col - 1) {
          this.maxSoFar = Math.min(this.maxSoFar, maxDifference);
          return maxDifference;
      }
      const currentHeight = heights[x][y];
      heights[x][y] = 0;
      let minEffort = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < 4; i++) {
          const adjacentX = x + this.directions[i][0];
          const adjacentY = y + this.directions[i][1];
          if (this.isValidCell(adjacentX, adjacentY, row, col) &&
              heights[adjacentX][adjacentY] !== 0) {
              const currentDifference =
                  Math.abs(heights[adjacentX][adjacentY] - currentHeight);
              const maxCurrentDifference =
                  Math.max(maxDifference, currentDifference);
              if (maxCurrentDifference < this.maxSoFar) {
                  const result = this.backtrack(adjacentX, adjacentY, heights, row,
                                         col, maxCurrentDifference);
                  minEffort = Math.min(minEffort, result);
              }
          }
      }
      heights[x][y] = currentHeight;
      return minEffort;
  }
  isValidCell(x, y, row, col) {
      return x >= 0 && x <= row - 1 && y >= 0 && y <= col - 1;
  }
}

const ans=new Solution()
const heights = [[1,2,3],[3,8,4],[5,3,5]]
console.log(ans.minimumEffortPath(heights))
// Example 1:
// Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 2
// Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
// This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

// Example 2:
// Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
// Output: 1
// Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].

// Example 3:
// Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
// Output: 0
// Explanation: This route does not require any effort.