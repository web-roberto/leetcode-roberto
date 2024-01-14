class Solution {
  snakesAndLadders(board) {
      let n = board.length;
      let cells = new Array(n * n + 1);
      let label = 1;
      let columns = new Array(n);
      for (let i = 0; i < n; i++) {
          columns[i] = i;
      }
      for (let row = n - 1; row >= 0; row--) {
          for (let column of columns) {
              cells[label++] = [row, column];
          }
          columns.reverse();
          debugger
      }
      let dist = new Array(n * n + 1).fill(-1);
      let q = [];
      dist[1] = 0;
      q.push(1);
      while (q.length > 0) {
          let curr = q.shift();
          for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
              let [row, column] = cells[next];
              let destination = board[row][column] !== -1 ? board[row][column] : next;
              debugger
              if (dist[destination] === -1) {
                  dist[destination] = dist[curr] + 1;
                  q.push(destination);
              }
          }
      }
      return dist[n * n];
  }
}
const ans= new Solution()
const board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
console.log(ans.snakesAndLadders(board))

// Example 1:
// Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
// Output: 4
// Explanation: 
// In the beginning, you start at square 1 (at row 5, column 0).
// You decide to move to square 2 and must take the ladder to square 15.
// You then decide to move to square 17 and must take the snake to square 13.
// You then decide to move to square 14 and must take the ladder to square 35.
// You then decide to move to square 36, ending the game.
// This is the lowest possible number of moves to reach the last square, so return 4.+
// Example 2:
// Input: board = [[-1,-1],[-1,3]]
// Output: 1
