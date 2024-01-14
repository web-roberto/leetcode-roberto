// ABOUT GRAPHS
// load the graph into a Map (in Trees were Nodes.)
// we choose the start node
// a loop to discover the neighbours of a node
// we need a 'seen' array to mark the visited node
// DFS ITERATIVE uses Stack (array) pops the node and adds its neighbours.
// DFS RECURSIVE do no uses Stack but dfs()


// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y,timestamp] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1,timestamp], [1, 2,timestamp], [2, 0,timestamp], [2, 3,timestamp]].

// in Map (adjacence list) -> source: [travelTime,dest]

class Solution {
  constructor() {
      // Adjacency list
      this.adj = new Map();
  }
  
  DFS(signalReceivedAt, currNode, currTime) {
      // If the current time is greater than or equal to the fastest signal received
      // Then no need to iterate over adjacent nodes
      if (currTime >= signalReceivedAt[currNode]) {
          return;
      }
      // Fastest signal time for currNode so far
      signalReceivedAt[currNode] = currTime;
      if (!this.adj.has(currNode)) {
          return;
      }
      // Broadcast the signal to adjacent nodes
      for (let edge of this.adj.get(currNode)) {
          let travelTime = edge[0];
          let neighborNode = edge[1];
          // currTime + time : time when signal reaches neighborNode
          this.DFS(signalReceivedAt, neighborNode, currTime + travelTime);
      }
  }
  
  networkDelayTime(times, n, k) {
      // Build the adjacency list
      for (let time of times) {
          let source = time[0];
          let dest = time[1];
          let travelTime = time[2];
          if (!this.adj.has(source)) {
              this.adj.set(source, []);
          }
          this.adj.get(source).push([travelTime, dest]); //in Map -> source: [travelTime,dest]
      }
      // Sort the edges connecting to every node
      for (let node of this.adj.keys()) {
        debugger
        //orders the Map related to timeOfEdge
        this.adj.get(node).sort((a, b) => a[0] - b[0]);
      }
      let signalReceivedAt = new Array(n + 1).fill(Number.MAX_VALUE);
      this.DFS(signalReceivedAt, k, 0);
      let answer = Number.MIN_VALUE;
      for (let node = 1; node <= n; node++) {
          answer = Math.max(answer, signalReceivedAt[node]);
      }
      // Number.MAX_VALUE signifies at least one node is unreachable
      return answer === Number.MAX_VALUE ? -1 : answer;
  }
}

const ans=new Solution()
const times =  [[2,1,1],[2,3,1],[3,4,1]]
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