
// en la entrada points indice 2 (nodo 2) tiene edge con nodo 3 y un el edge pesa:10 

// PRIM usa una PriorityQueue
const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');



class Solution {
  minCostConnectPoints(points) {
      const n = points.length;
      
      const heap = new PriorityQueue((a, b) => (a[0] - b[0])); //cola prioridad
      
      const inMST = new Array(n).fill(false); //the node is already in MST
      heap.enqueue([0, 0]);
      let mstCost = 0;
      let edgesUsed = 0;
      while (edgesUsed < n) {
          const topElement = heap.dequeue();
          const weight = topElement[0];
          const currNode = topElement[1];
          
          if (inMST[currNode]) {
              continue;
          }
          inMST[currNode] = true;
          mstCost += weight;
          edgesUsed++;
          for (let nextNode = 0; nextNode < n; ++nextNode) {
              if (!inMST[nextNode]) {
                  const nextWeight = Math.abs(points[currNode][0] - points[nextNode][0]) + 
                                   Math.abs(points[currNode][1] - points[nextNode][1]);
                  heap.enqueue([nextWeight, nextNode]);
              }
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