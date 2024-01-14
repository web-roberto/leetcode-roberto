
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Array de Sets structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

class Solution {
  findMinHeightTrees(n, edges) {
      // edge cases
      if (n < 2) {
          let centroids = [];
          for (let i = 0; i < n; i++)
              centroids.push(i);
          return centroids;
      }
      // Build the graph with the adjacency list
      let neighbors = []; // array de Sets
      for (let i = 0; i < n; i++)
          neighbors.push(new Set());
      for (let edge of edges) {
          let start = edge[0];
          let end = edge[1];
          neighbors[start].add(end);
          neighbors[end].add(start);
      }
      // Initialize the first layer of leaves
      let leaves = [];
      for (let i = 0; i < n; i++)
          if (neighbors[i].size === 1)
              leaves.push(i);
      // Trim the leaves until reaching the centroids
      let remainingNodes = n;
      while (remainingNodes > 2) {
          remainingNodes -= leaves.length;
          let newLeaves = [];
          // remove the current leaves along with the edges
          for (let leaf of leaves) {
              // the only neighbor left for the leaf node
              let neighbor = neighbors[leaf].values().next().value;
              // remove the edge along with the leaf node
              neighbors[neighbor].delete(leaf);
            //   for( let i = 0; i < neighbors.length; i++){ 
            //     if ( neighbors[i] === neighbor) { 
            //       neighbors.splice(i, 1); 
            //     }
            // }


              if (neighbors[neighbor].size === 1)
                  newLeaves.push(neighbor);
          }
          // prepare for the next round
          leaves = newLeaves;
      }
      // The remaining nodes are the centroids of the graph
      return leaves;
  }
}
const ans= new Solution()
const n = 4
const edges = [[1,0],[1,2],[1,3]]

// console.log(ans.findMinHeightTrees(n,edges))

// Example 1:
// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
const n2 = 6
const edges2 =[[3,0],[3,1],[3,2],[3,4],[5,4]]

console.log(ans.findMinHeightTrees(n2,edges2))
// Example 2:
// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]