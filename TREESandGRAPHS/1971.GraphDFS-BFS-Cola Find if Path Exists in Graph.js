// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// BFS uses Queue (array)

class Solution {
    validPath(n, edges, source, destination) {
        
        const graph = new Map();
        for (let edge of edges) {
            let a = edge[0], b = edge[1];
            if (!graph.has(a)) {
                graph.set(a, []);
            }
            if (!graph.has(b)) {
                graph.set(b, []);
            }
            graph.get(a).push(b); //[a, b]
            graph.get(b).push(a); //[b, a]
        }
        
        const seen = new Array(n).fill(false);
        seen[source] = true;
        const queue = [];
        queue.push(source);
        while (queue.length > 0) {
            let currNode = queue.shift();
            if (currNode === destination) {
                return true; 
            }
            
            for (let nextNode of graph.get(currNode)) {
                if (!seen[nextNode]) {
                    seen[nextNode] = true;
                    queue.push(nextNode);
                }
            }
        }
        return false;
    }
}

const ans = new Solution()
//console.log(ans.validPath(3,[[0,1],[1,2],[2,0]],0,2))

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

console.log(ans.validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],0,5))
// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.