/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// 2ND- INPUT FORMAT: ADJACENCY LIST
// The index is the Node and the value de Destination Node to connect - array 2D
// graph = [[1], [2], [0, 3], []].
// the Node 0 -> 1, 1->2, 2->0 and 2->3, 4->4
// graph[i] -> the Node i conect to the nodes

// MAP: I do not use MAP lo load from the Input array because it is already in a Map format !!


let canVisitAllRooms = function(rooms) {
  let dfs = node => {
      for (const neighbor of rooms[node]) {
          if (!seen.has(neighbor)) {
              seen.add(neighbor);
              dfs(neighbor);
          }
      }
  }
  
  let seen = new Set([0]);
  dfs(0);
  return seen.size == rooms.length;
};
const rooms =  [[1,3],[3,0,1],[2],[0]] //index:0,1,2,3
canVisitAllRooms(rooms)

// Example 1:
// Input: rooms = [[1],[2],[3],[]]
// Output: true
// Explanation:
// We visit room 0 and pick up key 1.
// We then visit room 1 and pick up key 2.
// We then visit room 2 and pick up key 3.
// We then visit room 3.
// Since we were able to visit every room, we return true

// Example 2:
// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.