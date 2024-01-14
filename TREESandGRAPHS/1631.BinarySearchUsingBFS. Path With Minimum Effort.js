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

// BFS uses Queue for the cells to visit in the future
//   - 1º: nodes with distance 0, 2º nodes with distance 1, 3º nodes with distance 2....
//   - inside the Queue can be nodes of two different levels

// On the top de Binary Seach selects a half to the range and  calls the BFS with this half
class Solution {
  minimumEffortPath(heights) {
      let left = 0;
      let right = 1000000;
      let result = right;
      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (this.canReachDestinaton(heights, mid)) {
              result = Math.min(result, mid);
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      return result;
  }
  canReachDestinaton(heights, k) {
      let row = heights.length;
      let col = heights[0].length;
      let queue = [];
      let visited = new Array(row).fill(false).map(() => new Array(col).fill(false));
      queue.push([0, 0]);
      visited[0][0] = true;
      while (queue.length > 0) {
          let curr = queue.shift();
          if (curr[0] === row - 1 && curr[1] === col - 1) {
              return true;
          }
          for (let direction of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
              let adjacentX = curr[0] + direction[0];
              let adjacentY = curr[1] + direction[1];
              if (this.isValidCell(adjacentX, adjacentY, row, col) && !visited[adjacentX][adjacentY]) {
                  let currentDifference = Math.abs(heights[adjacentX][adjacentY] - heights[curr[0]][curr[1]]);
                  if (currentDifference <= k) {
                      visited[adjacentX][adjacentY] = true;
                      queue.push([adjacentX, adjacentY]);
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

class Cell {
  constructor(x, y) {
      this.x = x;
      this.y = y;
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