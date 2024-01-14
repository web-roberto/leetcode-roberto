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

//BELLMAN-FORD -> array 'previous', 'current'

class Solution {
  // Bellman Ford Algorithm
  findCheapestPrice(n, flights, src, dst, k) {
      if (src === dst) {
          return 0;
      }
      let previous = new Array(n).fill(Number.MAX_VALUE);
      let current = new Array(n).fill(Number.MAX_VALUE);
      previous[src] = 0;
      for (let i = 1; i < k + 2; i++) {
          current[src] = 0;
          for (let flight of flights) {
              let previous_flight = flight[0];
              let current_flight = flight[1];
              let cost = flight[2];
              if (previous[previous_flight] < Number.MAX_VALUE) {
                  current[current_flight] = Math.min(current[current_flight],
                                                     previous[previous_flight] + cost);
              }
          }
          previous = current.slice();
      }
      return current[dst] === Number.MAX_VALUE ? -1 : current[dst];
  }
}

const ans=new Solution()
const n = 4
const flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]
const src = 0
const dst = 3
const k = 1
console.log(ans.findCheapestPrice(n, flights, src, dst, k))

// Example 1:
// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

// Example 2:
// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
// Output: 200
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.

// Example 3:
// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
// Output: 500
// Explanation:
// The graph is shown above.
// The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.