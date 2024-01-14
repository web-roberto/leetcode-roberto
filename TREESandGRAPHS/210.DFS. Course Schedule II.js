
class Solution {
  static WHITE = 1;
  static GRAY = 2;
  static BLACK = 3;
  constructor() {
    this.isPossible = true;
    this.color = new Map();
    this.adjList = new Map();
    this.topologicalOrder = [];
  }
  init(numCourses) {
    this.isPossible = true;
    this.color = new Map();
    this.adjList = new Map();
    this.topologicalOrder = [];
    // By default all vertices are WHITE
    for (let i = 0; i < numCourses; i++) {
      this.color.set(i, Solution.WHITE);
    }
  }
  dfs(node) {
    // Don't recurse further if we found a cycle already
    if (!this.isPossible) {
      return;
    }
    // Start the recursion
    this.color.set(node, Solution.GRAY);
    // Traverse on neighboring vertices
    for (let neighbor of this.adjList.get(node) || []) {
      if (this.color.get(neighbor) === Solution.WHITE) {
        this.dfs(neighbor);
      } else if (this.color.get(neighbor) === Solution.GRAY) {
        // An edge to a GRAY vertex represents a cycle
        this.isPossible = false;
      }
    }
    // Recursion ends. We mark it as black
    this.color.set(node, Solution.BLACK);
    this.topologicalOrder.push(node);
  }
  findOrder(numCourses, prerequisites) {
    this.init(numCourses);
    // Create the adjacency list representation of the graph
    for (let i = 0; i < prerequisites.length; i++) {
      let dest = prerequisites[i][0];
      let src = prerequisites[i][1];
      let lst = this.adjList.get(src) || [];
      lst.push(dest);
      this.adjList.set(src, lst);
    }
    // If the node is unprocessed, then call dfs on it.
    for (let i = 0; i < numCourses; i++) {
      if (this.color.get(i) === Solution.WHITE) {
        this.dfs(i);
      }
    }
    let order;
    if (this.isPossible) {
      order = new Array(numCourses);
      for (let i = 0; i < numCourses; i++) {
        order[i] = this.topologicalOrder[numCourses - i - 1];
      }
    } else {
      order = [];
    }
    return order;
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