// en la entrada points indice 2 (nodo 2) tiene edge con nodo 3 y un el edge pesa:10 

class UnionFind {
  constructor(size) {
      this.group = new Array(size);
      this.rank = new Array(size);
      for (let i = 0; i < size; ++i) {
          this.group[i] = i;
      }
  }
  find(node) {
      if (this.group[node] !== node) {
          this.group[node] = this.find(this.group[node]);
      }
      return this.group[node];
  }
  union(node1, node2) {
      const group1 = this.find(node1);
      const group2 = this.find(node2);
      
      if (group1 === group2) {
          return false;
      }
      if (this.rank[group1] > this.rank[group2]) {
          this.group[group2] = group1;
      } else if (this.rank[group1] < this.rank[group2]) {
          this.group[group1] = group2;
      } else {
          this.group[group1] = group2;
          this.rank[group2] += 1;
      }
      return true;
  }
}

class Solution {
  minCostConnectPoints(points) {
      const n = points.length;
      const allEdges = [];
      
      for (let currNext = 0; currNext < n; ++currNext) {
          for (let nextNext = currNext + 1; nextNext < n; ++nextNext) {
              const weight = Math.abs(points[currNext][0] - points[nextNext][0]) + 
                             Math.abs(points[currNext][1] - points[nextNext][1]);
              const currEdge = [weight, currNext, nextNext];
              allEdges.push(currEdge);
          }
      }
      
      allEdges.sort((a, b) => a[0] - b[0]);
      const uf = new UnionFind(n);
      let mstCost = 0;
      let edgesUsed = 0;
      for (let i = 0; i < allEdges.length && edgesUsed < n - 1; ++i) {
          const node1 = allEdges[i][1];
          const node2 = allEdges[i][2];
          const weight = allEdges[i][0];
          if (uf.union(node1, node2)) {
              mstCost += weight;
              edgesUsed++;
          }
      }
      return mstCost;
  }
}
const ans = new Solution()
// en la entrada points indice 2 (nodo 2) tiene edge con nodo 3 y un el edge pesa:10 
const points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
console.log(ans.minCostConnectPoints(points))

// Example 1:
// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation: We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.
// Example 2:
// Input: points = [[3,12],[-2,5],[-4,1]]
// Output: 18