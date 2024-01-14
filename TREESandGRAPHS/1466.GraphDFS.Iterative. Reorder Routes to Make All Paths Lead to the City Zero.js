/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].


// los DFS ITERATIVOS USAN LA PILA, LOS RECURSIVOS NO.
let minReorder = function(n, connections) {
  let convertToHash = (row, col) => {
      return row + "," + col;
  }
  
  let roads = new Set();
  let graph = new Map();
  let seen = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
      graph.set(i, []);
  }
  
  for (const [x, y] of connections) {
      graph.get(x).push(y);
      graph.get(y).push(x);
      roads.add(convertToHash(x, y));
  }
  
  let ans = 0;
  let stack = [0];
  seen[0] = true;
  while (stack.length) {
      let node = stack.pop();
      for (const neighbor of graph.get(node)) {
          if (!seen[neighbor]) {
              if (roads.has(convertToHash(node, neighbor))) {
                  ans++;
              }
              
              seen[neighbor] = true;
              stack.push(neighbor);
          }
      }
  }
  
  return ans
};
const matriz=[[0,1],[3,1],[2,3],[4,0],[5,4]]
console.log('The minimum number of roads to be changed is',minReorder(6,matriz))
