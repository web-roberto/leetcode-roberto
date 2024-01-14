// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y,timestamp] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1,timestamp], [1, 2,timestamp], [2, 0,timestamp], [2, 3,timestamp]].

// in Map (adjacence list) -> source: [travelTime,dest]

// ABOUT GRAPHS
// load the graph into a Map (in Trees were Nodes.)
// we choose the start node
// a loop to discover the neighbours of a node
// we need a 'seen' array to mark the visited node
// BFS uses Queue for the cells to visit in the future
//   - 1º: nodes with distance 0, 2º nodes with distance 1, 3º nodes with distance 2....
//   - inside the Queue can be nodes of two different levels

class Solution {
  constructor() {
      // Adjacency list
      this.adj = new Map();
  }
  
  BFS(signalReceivedAt, sourceNode) {
      const q = []; //queue as an Array
      q.push(sourceNode);
      // Time for starting node is 0
      signalReceivedAt[sourceNode] = 0;
      while (q.length > 0) {
          const currNode = q.shift();
          if (!this.adj.has(currNode)) {
              continue;
          }
          // Broadcast the signal to adjacent nodes
          for (const edge of this.adj.get(currNode)) {
              const time = edge[0];
              const neighborNode = edge[1];
              // Fastest signal time for neighborNode so far
              // signalReceivedAt[currNode] + time : 
              // time when signal reaches neighborNode
              const arrivalTime = signalReceivedAt[currNode] + time;
              if (signalReceivedAt[neighborNode] > arrivalTime) {
                  signalReceivedAt[neighborNode] = arrivalTime;
                  q.push(neighborNode);
              }
          }
      }
  }
  
  networkDelayTime(times, n, k) {
      // Build the adjacency list
      for (const time of times) {
          const source = time[0];
          const dest = time[1];
          const travelTime = time[2];
          if (!this.adj.has(source)) {
              this.adj.set(source, []);
          }
          this.adj.get(source).push([travelTime, dest]);
      }
      const signalReceivedAt = new Array(n + 1).fill(Number.MAX_VALUE);
      this.BFS(signalReceivedAt, k);
      let answer = Number.MIN_VALUE;
      for (let i = 1; i <= n; i++) {
          answer = Math.max(answer, signalReceivedAt[i]);
      }
      // Number.MAX_VALUE signifies at least one node is unreachable
      return answer === Number.MAX_VALUE ? -1 : answer;
  }
}
const ans=new Solution()
const times = [[2,1,1],[2,3,1],[3,4,1]]
const n = 4
const k = 2
console.log(ans.networkDelayTime(times,n,k))

// Example 1:
// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2
// Example 2:
// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1
// Example 3:
// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1