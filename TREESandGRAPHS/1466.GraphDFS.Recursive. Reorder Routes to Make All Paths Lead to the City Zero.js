/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// all roads must be directed towards 0 and anytime we see that an edge 
// is pointing away from 0, we know we need to swap it.
// Although the graph is a directed graph, let's convert it into an undirected one so that we can reach all nodes from 0. 
// To summarize: we treat the graph as undirected just so that we can do a DFS starting at 0. 
// During this DFS, every traversal we do is away from 0, so when we see an edge that we are crossing (node, neighbor) 
// is in connections, we know we need to swap it (increment the answer).
// I write down de edge direction using DFS and th edge of each node. 
// If both edges are equal it means it has to be reversed.


// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (el de vecinos)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// los DFS ITERATIVOS USAN LA PILA, LOS RECURSIVOS NO.
let minReorder = function(n, connections) {
  let convertToHash = (row, col) => {
      return row + "," + col;
  }
  
  let dfs = node => {
      let ans = 0;
      for (const neighbor of graph.get(node)) {
          if (!seen[neighbor]) {
              if (roads.has(convertToHash(node, neighbor))) {
                  ans++; // if roads [0,1] blue == graph [0,1] white -> reverse it
              }
              
              seen[neighbor] = true;
              ans += dfs(neighbor);
          }
      }
      return ans;
  }
  
  let roads = new Set(); //real Graph  -> 1,2    3,4  row,col
  let graph = new Map(); //doble direction to use DFS (I guess bidirectional to use DFS)
  let seen = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
      graph.set(i, []);
  }
  
  for (const [x, y] of connections) {
    //load the array of edges to a Map
      graph.get(x).push(y); // 0:[1,.....]
      graph.get(y).push(x); // 1:[0,...]
      roads.add(convertToHash(x, y)); //0,1 fila, col  -> no los meto en sentido contrario.
  }
  
  seen[0] = true;
  return dfs(0);
};
const matriz=[[0,1],[3,1],[2,3],[4,0],[5,4]]
console.log('The minimum number of roads to be changed is',minReorder(6,matriz))
