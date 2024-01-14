
 // graph:lista de adjacencias creada desde la entrada
 //array de indegree
//array de nodos con 0 inDegree
//resultado final

class Solution {
  findOrder(numCourses, prerequisites) {
      var graph = new Array(numCourses); //array de cursos
      for (let i = 0; i < numCourses; ++i) {
          graph[i] = [];
      }
      let indegree = new Array(numCourses).fill(0); //array de indegrees de cada nodo
      for (let p of prerequisites) {
          let from = p[1];
          let to = p[0];
          graph[from].push(to); // graph:lista de adjacencias creada desde la entrada
          ++indegree[to];
      }
      let zeroDegree = []; //array de nodos con 0 inDegree
      for (let i = 0; i < indegree.length; i++) {
          if (indegree[i] === 0) {
              zeroDegree.push(i);
          }
      }
      let result = new Array(numCourses); //resultado final
      let index = 0;
      while (zeroDegree.length > 0) {
          let course = zeroDegree.shift();
          result[index] = course; //resultado final
          index++;
          for (let child of graph[course]) { // al curso que depende de éste
              --indegree[child];
              if (indegree[child] === 0) {
                  zeroDegree.push(child);
              }
          }
      }
      for (let inDegree of indegree) {
          if (inDegree !== 0) {
              return new Array(0);
          }
      }
      return result;
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