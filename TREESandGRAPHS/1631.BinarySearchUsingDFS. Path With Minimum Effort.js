//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages
// load into a Map structure (adjacence list)
// we do not load from input array to a Map of adjacence list because we already know
// who are the neighbours (the four nodes around it)

// ABOUT GRAPHS
// load the graph into a Map (in Trees were Nodes.)
// we choose the start node
// a loop to discover the neighbours of a node
// we need a 'seen' array to mark the visited node

// DFS RECURSIVE do no uses Stack but dfs()

// On the top de Binary Seach selects a half to the range and calls the DFS with this half


class Solution {
  minimumEffortPath(heights) {
      let left = 0;
      let right = 1000000;
      let result = right;
      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (this.dfsUtil(heights, mid)) {
              result = Math.min(result, mid);
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      return result;
  }
  dfsUtil(heights, mid) {
      let row = heights.length;
      let col = heights[0].length;
      let visited = new Array(row).fill(false).map(() => new Array(col).fill(false));
      return this.canReachDestinaton(0, 0, heights, visited, row, col, mid);
  }
  canReachDestinaton(x, y, heights, visited, row, col, mid) {
      if (x === row - 1 && y === col - 1) {
          return true;
      }
      visited[x][y] = true;
      for (let direction of this.directions) {
          let adjacentX = x + direction[0];
          let adjacentY = y + direction[1];
          if (this.isValidCell(adjacentX, adjacentY, row, col) && !visited[adjacentX][adjacentY]) {
              let currentDifference = Math.abs(heights[adjacentX][adjacentY] - heights[x][y]);
              if (currentDifference <= mid) {
                  if (this.canReachDestinaton(adjacentX, adjacentY, heights, visited, row, col, mid)) {
                      return true;
                  }
              }
          }
      }
      return false;
  }
  isValidCell(x, y, row, col) {
      return x >= 0 && x <= row - 1 && y >= 0 && y <= col - 1;
  }
}
const ans= new Solution()
const heights = [[1,2,2],[3,8,2],[5,3,5]]
ans.minimumEffortPath(heights)
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