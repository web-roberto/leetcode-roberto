
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// ABOUT GRAPHS
// load the graph into a Map (in Trees were Nodes.)
// we choose the start node
// a loop to discover the neighbours of a node
// we need a 'seen' array to mark the visited node
// DFS RECURSIVE do no uses Stack but dfs()


class Solution {
  minimumSemesters(N, relations) {
      let graph = new Array(N + 1); // usa un Array de Adjacencias y no un Map
      for (let i = 0; i < N + 1; ++i) {
          graph[i] = [];
      }
      for (let relation of relations) {
          graph[relation[0]].push(relation[1]);
      }
      
      let visited = new Array(N + 1); //array visitados
      for (let node = 1; node < N + 1; node++) {
          if (this.dfsCheckCycle(node, graph, visited) == -1) {
              return -1;
          }
      }
      
      let visitedLength = new Array(N + 1); //depth of visited until now
      let maxLength = 1;
      for (let node = 1; node < N + 1; node++) {
          let length = this.dfsMaxPath(node, graph, visitedLength);
          maxLength = Math.max(length, maxLength);
      }
      return maxLength;
  }
  dfsCheckCycle(node, graph, visited) { //a DFS Recursive only to check whether is Cycle
      if (visited[node] != 0) {
          return visited[node];
      } else {
          visited[node] = -1;
      }
      for (let endNode of graph[node]) {
          if (this.dfsCheckCycle(endNode, graph, visited) == -1) {
              return -1;
          }
      }
      visited[node] = 1;
      return 1;
  }
  dfsMaxPath(node, graph, visitedLength) { //DFS Recursive to get the deep of the tree
      if (visitedLength[node] != 0) {
          return visitedLength[node];
      }
      let maxLength = 1;
      for (let endNode of graph[node]) {
          let length = this.dfsMaxPath(endNode, graph, visitedLength);
          maxLength = Math.max(length + 1, maxLength);
      }
      
      visitedLength[node] = maxLength;
      return maxLength;
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