class Cell {
  constructor(x, y, difference) {
      this.x = x;
      this.y = y;
      this.difference = difference;
  }
}

function minimumEffortPath(heights) {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const row = heights.length;
  const col = heights[0].length;
  const differenceMatrix = new Array(row).fill().map(() => new Array(col).fill(Number.MAX_VALUE));
  differenceMatrix[0][0] = 0;
  const queue = new PriorityQueue((a, b) => a.difference - b.difference);
  const visited = new Array(row).fill().map(() => new Array(col).fill(false));
  queue.enqueue(new Cell(0, 0, differenceMatrix[0][0]));
  while (!queue.isEmpty()) {
      const curr = queue.dequeue();
      visited[curr.x][curr.y] = true;
      if (curr.x === row - 1 && curr.y === col - 1) {
          return curr.difference;
      }
      for (const direction of directions) {
          const adjacentX = curr.x + direction[0];
          const adjacentY = curr.y + direction[1];
          if (isValidCell(adjacentX, adjacentY, row, col) && !visited[adjacentX][adjacentY]) {
              const currentDifference = Math.abs(heights[adjacentX][adjacentY] - heights[curr.x][curr.y]);
              const maxDifference = Math.max(currentDifference, differenceMatrix[curr.x][curr.y]);
              if (differenceMatrix[adjacentX][adjacentY] > maxDifference) {
                  differenceMatrix[adjacentX][adjacentY] = maxDifference;
                  queue.enqueue(new Cell(adjacentX, adjacentY, maxDifference));
              }
          }
      }
  }
  return differenceMatrix[row - 1][col - 1];
}

function isValidCell(x, y, row, col) {
  return x >= 0 && x <= row - 1 && y >= 0 && y <= col - 1;
}

class PriorityQueue {
  constructor(comparator) {
      this.comparator = comparator;
      this.queue = [];
  }

  enqueue(element) {
      this.queue.push(element);
      this.queue.sort(this.comparator);
  }

  dequeue() {
      return this.queue.shift();
  }

  isEmpty() {
      return this.queue.length === 0;
  }
}




const heights = [[1,2,2],[3,8,2],[5,3,5]]
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