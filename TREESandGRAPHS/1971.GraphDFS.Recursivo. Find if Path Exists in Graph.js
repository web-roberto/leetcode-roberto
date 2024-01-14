// Cada par de vértices está conectado como máximo por una arista, y ningún vértice tiene una arista en sí mismo.
// Desea determinar si existe una ruta válida desde el origen del vértice hasta el destino del vértice.

// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].

// DFS RECURSIVE do no uses Stack but dfs()


class Solution {
    validPath(n, edges, source, destination) {
        const graph = new Map();
        const seen = new Array(n).fill(false);
        for (const edge of edges) {
            const a = edge[0], b = edge[1];
            if (!graph.has(a)) {
                graph.set(a, []);
            }
            if (!graph.has(b)) {
                graph.set(b, []);
            }
            graph.get(a).push(b); //[a,b]
            graph.get(b).push(a); //[b,a]
        }
        return this.dfs(graph, seen, source, destination);
    }
    dfs(graph, seen, currNode, destination) {
        if (currNode === destination) {
            return true;
        }
        if (!seen[currNode]) {
            seen[currNode] = true;
            for (const nextNode of graph.get(currNode)) {
                //falta un seen de nextNode aqui o lo hace en la próxima recursión de dfs??
                if (this.dfs(graph, seen, nextNode, destination)) {
                    return true;
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