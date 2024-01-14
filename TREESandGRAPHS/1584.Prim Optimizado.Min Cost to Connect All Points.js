// en la entrada points indice 2 (nodo 2) tiene edge con nodo 3 y un el edge pesa:10 

let minCostConnectPoints = function(points) {
  let n = points.length;
  let mstCost = 0;
  let edgesUsed = 0;

  // Track nodes which are visited.
  let inMST = Array(n).fill(false);

  let minDist = Array(n).fill(Number.MAX_SAFE_INTEGER);
  minDist[0] = 0;

  while (edgesUsed < n) {
      let currMinEdge = Number.MAX_SAFE_INTEGER;
      let currNode = -1;

      // Pick least weight node which is not in MST.
      for (let node = 0; node < n; ++node) {
          if (!inMST[node] && currMinEdge > minDist[node]) {
              currMinEdge = minDist[node];
              currNode = node;
          }
      }

      mstCost += currMinEdge;
      edgesUsed++;
      inMST[currNode] = true;

      // Update adjacent nodes of current node.
      for (let nextNode = 0; nextNode < n; ++nextNode) {
          let weight = Math.abs(points[currNode][0] - points[nextNode][0]) + 
                       Math.abs(points[currNode][1] - points[nextNode][1]);

          if (!inMST[nextNode] && minDist[nextNode] > weight) {
              minDist[nextNode] = weight;
          }
      }
  }

  return mstCost;
};
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