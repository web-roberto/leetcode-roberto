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

//DIKJSTRA: BFS + Priority Queue (less price, more priority)
//utilizaremos una 'matriz de paradas' que realiza un seguimiento del número mínimo de paradas (de k)
// necesarias para llegar a cada nodo en lugar del precio mínimo (priority queue). Entonces, solo atravesaremos un edge hasta un
// nodo x si x no ha sido visitado con menos paradas. 
//Debido a que ELEGIMOS CON AVIDEZ EL NODO CON EL PRECIO TOTAL MÁS BAJO, la primera vez que lleguemos a dst, 
//tendremos la respuesta.

const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');


class Solution {
  findCheapestPrice(n, flights, src, dst, k) {
      const adj = new Map();
      for (let i = 0; i < flights.length; i++) {
          const flight = flights[i];
          if (!adj.has(flight[0])) {
              adj.set(flight[0], []);
          }
          adj.get(flight[0]).push([flight[1], flight[2]]);
      }
      //nº of stops(=levels of BFS) instead of dist (minimal price)
      const stops = new Array(n).fill(Number.MAX_VALUE);
      //the minimal price is garanted in the Priority Queue
      const pq = new PriorityQueue((a, b) => a[0] - b[0]);
      pq.enqueue([0, src, 0]);
      while (!pq.isEmpty()) {
          const temp = pq.dequeue();
          const dist = temp[0];
          const node = temp[1];
          const steps = temp[2];
          if (steps > stops[node] || steps > k + 1) {
              continue;
          }
          stops[node] = steps;
          if (node === dst) {
              return dist;
          }
          if (!adj.has(node)) {
              continue;
          }
          const neighbors = adj.get(node);
          for (let i = 0; i < neighbors.length; i++) {
              const neighbor = neighbors[i];
              pq.enqueue([dist + neighbor[1], neighbor[0], steps + 1]);
          }
      }
      return -1;
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