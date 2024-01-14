//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages
// load into a Map structure (adjacence list)
// we do not load from input array to a Map of adjacence list because we already know
// who are the neighbours (the four nodes around it)

// BFS uses Queue for the cells to visit in the future
//   - 1º: nodes with distance 0, 2º nodes with distance 1, 3º nodes with distance 2....
//   - inside the Queue can be nodes of two different levels


class Solution {
  nearestExit(maze, entrance) {
      let rows = maze.length;
      let cols = maze[0].length;
      let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      // Mark the entrance as visited since its not a exit.
      let startRow = entrance[0];
      let startCol = entrance[1];
      maze[startRow][startCol] = '+';
      // Start BFS from the entrance, and use a queue `queue` to store all 
      // the cells to be visited.
      let queue = [];
      queue.push([startRow, startCol, 0]);
      while (queue.length > 0) {
          let currState = queue.shift();
          let currRow = currState[0];
          let currCol = currState[1];
          let currDistance = currState[2];
          // For the current cell, check its four neighbor cells.
          for (let dir of dirs) {
              let nextRow = currRow + dir[0];
              let nextCol = currCol + dir[1];
              // If there exists an unvisited empty neighbor:
              if (0 <= nextRow && nextRow < rows && 0 <= nextCol && nextCol < cols
                 && maze[nextRow][nextCol] == '.') {
                  // If this empty cell is an exit, return distance + 1.
                  if (nextRow == 0 || nextRow == rows - 1 || nextCol == 0 || nextCol == cols - 1)
                      return currDistance + 1; //if reached a border
                  // Otherwise, add this cell to 'queue' and mark it as visited.
                  maze[nextRow][nextCol] = '+';
                  queue.push([nextRow, nextCol, currDistance + 1]);
              }  
          }
      }
      // If we finish iterating without finding an exit, return -1.
      return -1;
  }
}
const ans =new Solution()
const maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]]
const entrance = [1,2]
console.log(ans.nearestExit(maze,entrance))


// Example 1:
// const maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]]
// const entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.

const maze2 =  [["+","+","+"],[".",".","."],["+","+","+"]]
const entrance2 = [1,0]
console.log(ans.nearestExit(maze2,entrance2))
// Example 2:
// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.

// Example 3:
// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.