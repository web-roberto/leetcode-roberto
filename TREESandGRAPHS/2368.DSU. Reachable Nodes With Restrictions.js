
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// carga la lista de edges creando uniones de nodo a nodo con 'union' y para buscar 'find'


class UnionFind {
  constructor(n) {
      this.root = new Array(n);
      this.rank = new Array(n);
      for (let i = 0; i < n; ++i) {
          this.root[i] = i;
          this.rank[i] = 1;
      }
  }
  find(x) {
      if (this.root[x] !== x) {
          this.root[x] = this.find(this.root[x]);
      }
      return this.root[x];
  }
  union(x, y) {
      let rootX = this.find(x), rootY = this.find(y);
      if (rootX !== rootY) {
          if (this.rank[rootX] > this.rank[rootY]) {
              [rootX, rootY] = [rootY, rootX];
          }
          this.root[rootX] = rootY;
          this.rank[rootY] += this.rank[rootX];
      }
  }
  getSize(x) {
      return this.rank[this.find(x)];
  }
}

class Solution {
  reachableNodes(n, edges, restricted) {
      const uf = new UnionFind(n);
      const restSet = new Set(restricted);
      for (const node of restricted) {
          restSet.add(node);
      }
      for (const edge of edges) {
          const a = edge[0], b = edge[1];
          if (!restSet.has(a) && !restSet.has(b)) {
              uf.union(a, b);
          }
      }
      return uf.getSize(0);
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