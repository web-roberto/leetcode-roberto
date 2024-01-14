// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// NOTA: It uses an Array(1 or 0) instead a Map to create an adjacence list of neighbours
class Solution {
  dfs(adjList, visited, startNode) {
     visited[startNode] = 1;
     for (let i = 0; i < adjList[startNode].length; i++) {
         if (visited[adjList[startNode][i]] == 0) {
             this.dfs(adjList, visited, adjList[startNode][i]);
         }
     }
 }
 countComponents(n, edges) {
     let components = 0;
     let visited = new Array(n).fill(0);
     let adjList = new Array(n);
     for (let i = 0; i < n; i++) {
         adjList[i] = [];
     }
     for (let i = 0; i < edges.length; i++) {
         adjList[edges[i][0]].push(edges[i][1]); //0 is a, 1 is b
         adjList[edges[i][1]].push(edges[i][0]); //1 is b, 0 is a
     }
     for (let i = 0; i < n; i++) {
         if (visited[i] == 0) {
            // the nº of nodes non visited is the nº of components
             components++;
             this.dfs(adjList, visited, i);
         }
     }
     return components;
 }
}

const ans = new Solution()
console.log(ans.countComponents(5,[[0,1],[1,2],[3,4]]))
// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2

console.log(ans.countComponents(5,[[0,1],[1,2],[2,3],[3,4]]))
// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1