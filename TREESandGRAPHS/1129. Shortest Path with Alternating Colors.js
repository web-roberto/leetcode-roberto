/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

//BFS 


let shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  let addToGraph = (color, edges) => {
      for (let i = 0; i < n; i++) {
          graph.get(color).set(i, []);
      }
      
      for (const [x, y] of edges) {
          graph.get(color).get(x).push(y);
      }
  }
  
  const RED = 0;
  const BLUE = 1;
  
  let graph = new Map();
  graph.set(RED, new Map());
  graph.set(BLUE, new Map());
  addToGraph(RED, redEdges);
  addToGraph(BLUE, blueEdges);
  
  let ans = new Array(n).fill(Infinity);
  let queue = [[0, RED], [0, BLUE]];
  let seen = [];
  for (let i = 0; i < n; i++) {
      seen.push(new Array(2).fill(false));
  }
  
  seen[0][RED] = true;
  seen[0][BLUE] = true;
  
  let steps = 0;
  
  while (queue.length) {
      let currentLength = queue.length;
      let nextQueue = [];
      
      for (let i = 0; i < currentLength; i++) {
          let [node, color] = queue[i];
          ans[node] = Math.min(ans[node], steps);

          for (const neighbor of graph.get(color).get(node)) {
              if (!seen[neighbor][1 - color]) {
                  seen[neighbor][1 - color] = true;
                  nextQueue.push([neighbor, 1 - color]);
              }
          }
      }
      
      queue = nextQueue;
      steps++;
  }
  
  for (let i = 0; i < n; i++) {
      if (ans[i] == Infinity) {
          ans[i] = -1;
      }
  }
  
  return ans;
};


// Example 1:
// Output: [0,1,-1]

const n = 3
const redEdges = [[0,1],[1,2]]
const blueEdges = []
shortestAlternatingPaths(n,redEdges,blueEdges)


// Example 2:
// Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
// Output: [0,1,-1]