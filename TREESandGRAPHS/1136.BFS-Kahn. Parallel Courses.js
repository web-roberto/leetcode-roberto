
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].


// ABOUT GRAPHS
// load the graph into a Map (in Trees were Nodes.)
// we choose the start node
// a loop to discover the neighbours of a node
// we need a 'seen' array to mark the visited node
// BFS uses Queue for the cells to visit in the future
//   - 1º: nodes with distance 0, 2º nodes with distance 1, 3º nodes with distance 2....
//   - inside the Queue can be nodes of two different levels

//  Kahn es un BFS que pone en la queue solo los nodos con inDegree a 0 y resta 1 a los nodos directos
// va por niveles al seleccionar para la cola los nuevos nodos con indegree a 0


class Solution {
  minimumSemesters(N, relations) {
      let inCount = new Array(N + 1).fill(0); //Array de indegree de cada nodo
      let graph = new Array(N + 1); // usa un Array de Adjacencias y no un Map
      for (let i = 0; i < N + 1; ++i) {
          graph[i] = [];
      }
      for (let relation of relations) {
          graph[relation[0]].push(relation[1]);
          inCount[relation[1]]++;
      }
      let step = 0;
      let studiedCount = 0;
      let bfsQueue = []; //la cola del BFS
      for (let node = 1; node < N + 1; node++) {
          if (inCount[node] == 0) {
              bfsQueue.push(node);
          }
      }
      
      while (bfsQueue.length > 0) {
          step++;
          let nextQueue = [];
          for (let node of bfsQueue) { //for each item in queue (indegree 0), lets decrease  indegree of children
              studiedCount++;
              for (let endNode of graph[node]) {
                  inCount[endNode]--;
                  if (inCount[endNode] == 0) {
                      nextQueue.push(endNode);
                  }
              }
          }
          bfsQueue = nextQueue;
      }
      
      return studiedCount == N ? step : -1;
  }
}
const ans= new Solution()
const n= 3
const relations = [[1,3],[2,3]]

console.log(ans.minimumSemesters(n,relations))
// Example 1:
// Input: n = 3, relations = [[1,3],[2,3]]
// Output: 2
// Explanation: The figure above represents the given graph.
// In the first semester, you can take courses 1 and 2.
// In the second semester, you can take course 3.
// Example 2:
// Input: n = 3, relations = [[1,2],[2,3],[3,1]]
// Output: -1
// Explanation: No course can be studied because they are prerequisites of each other.