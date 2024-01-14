class Solution {
  findOrder(numCourses, prerequisites) {
    let isPossible = true;
    let adjList = new Map();
    let indegree = new Array(numCourses).fill(0);
    let topologicalOrder = new Array(numCourses).fill(0);
    // Create the adjacency list representation of the graph
    for (let i = 0; i < prerequisites.length; i++) {
      let dest = prerequisites[i][0];
      let src = prerequisites[i][1];
      let lst = adjList.get(src) || [];
      lst.push(dest);
      adjList.set(src, lst);
      // Record in-degree of each vertex
      indegree[dest] += 1;
    }
    // Add all vertices with 0 in-degree to the queue
    let q = [];
    for (let i = 0; i < numCourses; i++) {
      if (indegree[i] === 0) {
        q.push(i);
      }
    }
    let i = 0;
    // Process until the Q becomes empty
    while (q.length > 0) {
      let node = q.shift();
      topologicalOrder[i++] = node;
      // Reduce the in-degree of each neighbor by 1
      if (adjList.has(node)) {
        for (let neighbor of adjList.get(node)) {
          indegree[neighbor]--;
          // If in-degree of a neighbor becomes 0, add it to the Q
          if (indegree[neighbor] === 0) {
            q.push(neighbor);
          }
        }
      }
    }
    // Check to see if topological sort is possible or not.
    if (i === numCourses) {
      return topologicalOrder;
    }
    return [];
  }
}

const ans= new Solution()
const numCourses = 2
const prerequisites = [[1,0]]

console.log(ans.findOrder(numCourses,prerequisites))

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Example 2:
// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Example 3:
// Input: numCourses = 1, prerequisites = []
// Output: [0]






