// DST: DISJOIN SET UNION 
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].


class Solution {
  find(representative, vertex) {
      if (vertex === representative[vertex]) {
          return vertex;
      }
      return representative[vertex] = this.find(representative, representative[vertex]);
  }
  combine(representative, size, vertex1, vertex2) {
      vertex1 = this.find(representative, vertex1);
      vertex2 = this.find(representative, vertex2);
      if (vertex1 === vertex2) {
          return 0;
      } else {
          if (size[vertex1] > size[vertex2]) {
              size[vertex1] += size[vertex2];
              representative[vertex2] = vertex1;
          } else {
              size[vertex2] += size[vertex1];
              representative[vertex1] = vertex2;
          }
          return 1;
      }
  }
  countComponents(n, edges) {
      let representative = new Array(n);
      let size = new Array(n);
      for (let i = 0; i < n; i++) {
          representative[i] = i;
          size[i] = 1;
      }
      let components = n; //each node is a component at the beginning
      for (let i = 0; i < edges.length; i++) { 
        // we join nodes and decrease the nº of components
          components -= this.combine(representative, size, edges[i][0], edges[i][1]);
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