
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// DFS RECURSIVE do no uses Stack but dfs()

class Solution {
  constructor() {
      this.ans = 0;
  }
  
  dfs(currNode, neighbors, seen) {
      this.ans++;
      seen.add(currNode);
      
      for (let nextNode of neighbors.get(currNode)) {
          if (!seen.has(nextNode)) {
              this.dfs(nextNode, neighbors, seen);
          }
      }
  }
  
  reachableNodes(n, edges, restricted) {
      const neighbors = new Map();
      for (let edge of edges) {
          let a = edge[0], b = edge[1];
          if (!neighbors.has(a)) {
              neighbors.set(a, []);
          }
          if (!neighbors.has(b)) {
              neighbors.set(b, []);
          }
          neighbors.get(a).push(b);
          neighbors.get(b).push(a);
      }
      
      const seen = new Set(restricted); //restricted are marked as 'seen' and never will be visited
      this.dfs(0, neighbors, seen);
      return this.ans;
  }
}
const ans=new Solution()
const n = 7
const edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]]
const restricted = [4,5]
console.log(ans.reachableNodes(n,edges,restricted))

// Example 1:
// Input: n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]
// Output: 4
// Explanation: The diagram above shows the tree.
// We have that [0,1,2,3] are the only nodes that can be reached from node 0 without visiting a restricted node.

// Example 2:
// Input: n = 7, edges = [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], restricted = [4,2,1]
// Output: 3
// Explanation: The diagram above shows the tree.
// We have that [0,5,6] are the only nodes that can be reached from node 0 without visiting a restricted node.
