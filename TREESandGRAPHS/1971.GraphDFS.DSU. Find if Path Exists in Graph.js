// Cada par de vértices está conectado como máximo por una arista, y ningún vértice tiene una arista en sí mismo.
// Desea determinar si existe una ruta válida desde el origen del vértice hasta el destino del vértice.

// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].



// carga la lista de edges creando uniones de nodo a nodo con 'union' y para buscar 'find'

class UnionFind {
    constructor(n) {
        this.root = new Array(n);
        this.rank = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    find(x) {
        if (this.root[x] !== x) {
            this.root[x] = this.find(this.root[x]);
        }
        return this.root[x];
    }
    union(x, y) {
        let rootX = this.find(x), rootY = this.find(y);
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                [rootX, rootY] = [rootY, rootX];
            }
            this.root[rootX] = rootY;
            this.rank[rootY] += this.rank[rootX];
        }
    }
}

class Solution {
    validPath(n, edges, source, destination) {
        const uf = new UnionFind(n);
        for (const edge of edges) {
            uf.union(edge[0], edge[1]); //edge[0] es a y edge[1] es b
        }
        return uf.find(source) === uf.find(destination);
    }
}

const ans = new Solution()
console.log(ans.validPath(3,[[0,1],[1,2],[2,0]],0,2))

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
//console.log(ans.validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],0,5))

// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.
