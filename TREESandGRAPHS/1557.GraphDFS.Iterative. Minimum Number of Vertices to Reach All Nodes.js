/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// No usa DFS, usa indegrees (nº de edges que entran a un nodo)

let findSmallestSetOfVertices = function(n, edges) {
  let indegree = new Array(n).fill(0); //array of indegrees
  for (const [x, y] of edges) {
      indegree[y]++;
  }  
  let ans = [];
  for (let i = 0; i < n; i++) {
      if (indegree[i] == 0) {
          ans.push(i);
      }
  }
  
  return ans;
};
const edges=[[0,1],[0,2],[2,5],[3,4],[4,2]]
findSmallestSetOfVertices(6,edges)