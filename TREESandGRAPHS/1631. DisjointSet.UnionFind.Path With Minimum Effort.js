//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages
// load into a Map structure (adjacence list)
// we do not load from input array to a Map of adjacence list because we already know
// who are the neighbours (the four nodes around it)

// EL leetcode en este mismo curso: https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3843/+
// creo una EdgeList -> almaceno la matriz en una lista de Edges
class Solution {
  minimumEffortPath(heights) {
      let row = heights.length;
      let col = heights[0].length;
      if (row === 1 && col === 1) return 0;
      let unionFind = new UnionFind(heights);
      let edgeList = unionFind.edgeList;
      edgeList.sort((e1, e2) => e1.difference - e2.difference); //ordeno los edges convertido de la matriz de entrada
      for (let i = 0; i < edgeList.length; i++) {
          let x = edgeList[i].x;
          let y = edgeList[i].y;
          unionFind.union(x, y); //va uniendo los EdgeList
          if (unionFind.find(0) === unionFind.find(row * col - 1)) return edgeList[i].difference;
      }
      return -1;
  }
}
class UnionFind {
  constructor(heights) {
      let row = heights.length;
      let col = heights[0].length;
      this.parent = new Array(row * col);
      this.edgeList = []; //objeto Edge(fila,columna,diferencia) -> es un edge
      this.rank = new Array(row * col);  //   QUE ES ????
      for (let currentRow = 0; currentRow < row; currentRow++) {
          for (let currentCol = 0; currentCol < col; currentCol++) {
              if (currentRow > 0) {
                  this.edgeList.push(new Edge(currentRow * col + currentCol,
                          (currentRow - 1) * col + currentCol,
                          Math.abs(heights[currentRow][currentCol] - heights[currentRow - 1][currentCol]))
                  );
              }
              if (currentCol > 0) {
                  this.edgeList.push(new Edge(currentRow * col + currentCol,
                          currentRow * col + currentCol - 1,
                          Math.abs(heights[currentRow][currentCol] - heights[currentRow][currentCol - 1]))
                  );
              }
              this.parent[currentRow * col + currentCol] = currentRow * col + currentCol;
          }
      }
  }
  find(x) {
      if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
      return this.parent[x];
  }
  union(x, y) {
      let parentX = this.find(x);
      let parentY = this.find(y);
      if (parentX !== parentY) {
          if (this.rank[parentX] > this.rank[parentY]) this.parent[parentY] = parentX;
          else if (this.rank[parentX] < this.rank[parentY]) this.parent[parentX] = parentY;
          else {
              this.parent[parentY] = parentX;
              this.rank[parentX] += 1;
          }
      }
  }
}
class Edge {
  constructor(x, y, difference) {
      this.x = x;
      this.y = y;
      this.difference = difference;
  }
}
const ans= new Solution()
const heights = [[1,2,2],[3,8,2],[5,3,5]]
ans.minimumEffortPath(heights)
// Example 1:
// Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 2
// Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
// This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

// Example 2:
// Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
// Output: 1
// Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].

// Example 3:
// Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
// Output: 0
// Explanation: This route does not require any effort.