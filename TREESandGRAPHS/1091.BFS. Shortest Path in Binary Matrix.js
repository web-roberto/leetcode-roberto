/**
 * @param {number[][]} grid
 * @return {number}
 */
// Dada una cuadrícula de matriz binaria n x n, devuelva la longitud del camino claro más corto en la matriz. Si no hay una ruta clara, devuelve -1. Una ruta clara es una ruta desde la celda superior izquierda (0, 0) hasta la celda inferior derecha (n - 1, n - 1) de modo que todas las celdas visitadas sean 0.
// Puede moverse en 8 direcciones (arriba, abajo , izquierda, derecha o en diagonal).

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
// BFS uses Queue

// seen (Array 2D)
let shortestPathBinaryMatrix = function(grid) {
  let valid = (row, col) => {
      return 0 <= row && row < n && 0 <= col && col < n && grid[row][col] == 0;
  }
  
  if (grid[0][0] == 1) {
      return -1;
  }
  
  let n = grid.length;
  let seen = [];
  for (let i = 0; i < n; i++) {
      seen.push(new Array(n).fill(false));
  }
  seen[0][0] = true;
  
  let queue = [[0, 0]]; // row, col
  // the 8 neighbours of the node
  let directions = [[0, 1], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1], [0, -1], [-1, 0]];
  let steps = 0;
  
  while (queue.length) {
      let currentLength = queue.length;
      let nextQueue = [];
      steps++;
      
      for (let i = 0; i < currentLength; i++) {
          let [row, col] = queue[i];
          if (row == n - 1 && col == n - 1) {
              return steps;
          }

          for (const [dx, dy] of directions) {
              let nextRow = row + dy, nextCol = col + dx;
              if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                  seen[nextRow][nextCol] = true;
                  nextQueue.push([nextRow, nextCol]);
              }
          }
      }
      
      queue = nextQueue;
  }
  
  return -1;
};



// Example 1:
const grid = [[0,1],[1,0]]
// Output: 2
console.log(shortestPathBinaryMatrix(grid))


// Example 2:
const grid2 = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4
console.log(shortestPathBinaryMatrix(grid2))

// Example 3:
const grid3 = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1
console.log(shortestPathBinaryMatrix(grid3))
