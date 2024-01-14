
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// ABOUT GRAPHS
// load the graph into a Map (in Trees were Nodes.)
// we choose the start node
// a loop to discover the neighbours of a node
// we need a 'seen' array to mark the visited node
// DFS RECURSIVE do no uses Stack but dfs()

// In a DFS we join dfsCheckCycle and dfsMaxPath of the Algorithm 1136.DFS.CheckCycles+FindLongestPath. Parallell Courses.js

class Solution {
  minimumSemesters(N, relations) {
      let graph = new Array(N + 1);
      for (let i = 0; i < N + 1; ++i) {
          graph[i] = [];
      }
      for (let relation of relations) {
          graph[relation[0]].push(relation[1]);
      }
      let visited = new Array(N + 1);
      let maxLength = 1;
      for (let node = 1; node < N + 1; node++) {
          let length = this.dfs(node, graph, visited);
          
          if (length == -1) {
              return -1;
          }
          maxLength = Math.max(length, maxLength);
      }
      return maxLength;
  }
  dfs(node, graph, visited) {
      
      if (visited[node] != 0) {
          return visited[node];
      } else {
          
          visited[node] = -1;
      }
      let maxLength = 1;
      for (let endNode of graph[node]) {
          let length = this.dfs(endNode, graph, visited);
          
          if (length == -1) {
              return -1;
          }
          maxLength = Math.max(length + 1, maxLength);
      }
      
      visited[node] = maxLength;
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