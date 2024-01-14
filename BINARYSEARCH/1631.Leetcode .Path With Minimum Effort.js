/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  let valid = (row, col) => {
      return 0 <= row && row < m && 0 <= col && col < n;
  }
  
  let check = effort => {
      let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
      let seen = [];
      for (let i = 0; i < m; i++) {
          seen.push(new Array(n).fill(false));
      }
      
      seen[0][0] = true;
      let stack = [[0, 0]];
      
      while (stack.length) {
          const [row, col] = stack.pop();
          if (row == m - 1 && col == n - 1) {
              return true;
          }
          
          for (const [dx, dy] of directions) {
              let nextRow = row + dy, nextCol = col + dx;
              if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                  if (Math.abs(heights[nextRow][nextCol] - heights[row][col]) <= effort) {
                      seen[nextRow][nextCol] = true;
                      stack.push([nextRow, nextCol]);
                  }
              }
          }
      }
      
      return false;
  }
  
  let m = heights.length;
  let n = heights[0].length;
  
  let left = 0;
  let right = 0;
  for (const arr of heights) {
      right = Math.max(right, Math.max(...arr));
  }
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (check(mid)) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  
  return left;
};


const heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
console.log(minimumEffortPath(heights))
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