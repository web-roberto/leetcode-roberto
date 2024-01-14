// en la entrada points indice 2 (nodo 2) tiene edge con nodo 3 y un el edge pesa:10 
// usa UnionFind con 'Union by rank' and 'PAth Compression' -> https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3843/

// Kruskal usa una PriorityQueue
const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');



class Solution {
    
  minCostConnectPoints(points) {
      if (points == null || points.length == 0) {
          return 0;
      }
      let size = points.length;
      let pq = new PriorityQueue((x, y) => x.cost - y.cost); //cola con Edges ordenado por menor peso
      let uf = new UnionFind(size); //para find:ver si tienen un padre común y están ya conectado
      // para union, unir dos nodos con su edge
      for (let i = 0; i < size; i++) {
          let coordinate1 = points[i];
          for (let j = i+1; j < size; j++) {
              let coordinate2 = points[j];
              
              let cost = Math.abs(coordinate1[0] - coordinate2[0]) + 
                         Math.abs(coordinate1[1] - coordinate2[1]);
              let edge = new Edge(i, j, cost);
              pq.enqueue(edge);
          }
      }
      let result = 0;
      let count = size - 1;
      while (!pq.isEmpty() && count > 0) {
          let edge = pq.dequeue();
          if (!uf.connected(edge.point1, edge.point2)) {
              uf.union(edge.point1, edge.point2);
              result += edge.cost;
              count--;
          }
      }
      return result;
  }
}
class Edge {
  constructor(point1, point2, cost) {
      this.point1 = point1;
      this.point2 = point2;
      this.cost = cost;
  }
}
class UnionFind {
  constructor(size) {
      this.root = new Array(size);
      this.rank = new Array(size);
      for (let i = 0; i < size; i++) {
          this.root[i] = i;
          this.rank[i] = 1; 
      }
  }
  find(x) {
      if (x == this.root[x]) {
          return x;
      }
      return this.root[x] = this.find(this.root[x]);
  }
  union(x, y) {
      let rootX = this.find(x);
      let rootY = this.find(y);
      if (rootX != rootY) {
          if (this.rank[rootX] > this.rank[rootY]) {
              this.root[rootY] = rootX;
          } else if (this.rank[rootX] < this.rank[rootY]) {
              this.root[rootX] = rootY;
          } else {
              this.root[rootY] = rootX;
              this.rank[rootX] += 1;
          }
      }
  }
  connected(x, y) {
      return this.find(x) == this.find(y);
  }
}

// en la entrada points indice 2 (nodo 2) tiene edge con nodo 3 y un el edge pesa:10 

let points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
let solution = new Solution();
console.log("Minimum Cost to Connect Points = " + solution.minCostConnectPoints(points));

// Example 1:
// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation: We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.
// Example 2:
// Input: points = [[3,12],[-2,5],[-4,1]]
// Output: 18