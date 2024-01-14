const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');


class Solution {
    
  minCostConnectPoints(points) 
  {
      if (points == null || points.length == 0) {
          return 0;
      }
      let size = points.length;
      let pq = new PriorityQueue((x, y) => x.cost - y.cost);
      let visited = new Array(size).fill(false);
      let result = 0;
      let count = size - 1;
      
      let coordinate1 = points[0];
      for (let j = 1; j < size; j++) {
          
          let coordinate2 = points[j];
          let cost = Math.abs(coordinate1[0] - coordinate2[0]) + 
                     Math.abs(coordinate1[1] - coordinate2[1]);
          let edge = new Edge(0, j, cost);
          pq.enqueue(edge);
      }
      visited[0] = true;
      while (!pq.isEmpty() && count > 0) {
          let edge = pq.dequeue();
          let point1 = edge.point1;
          let point2 = edge.point2;
          let cost = edge.cost;
          if (!visited[point2]) {
              result += cost;
              visited[point2] = true;
              for (let j = 0; j < size; j++) {
                  if (!visited[j]) {
                      let distance = Math.abs(points[point2][0] - points[j][0]) + 
                                     Math.abs(points[point2][1] - points[j][1]);
                      pq.enqueue(new Edge(point2, j, distance));
                  }
              }
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

let points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
let solution = new Solution();
console.log("Minimum Cost to Connect Points = " + solution.minCostConnectPoints(points));
