
// 1st- INPUT FORMAT: ARRAY OF EDGES (dirigidos o no)
// [x,y] are edges between nodes (array 2D ) ->  to a Map structure (adjacence list)
// edges = [[0, 1], [1, 2], [2, 0], [2, 3]].
let buildGraph = edges => {
  // El Map tendrá
  // 0: 1 
  // 1: 2
  // 2: [0, 3] -> [2,0] y [2,3]
  let graph = new Map();
  for (const [x, y] of edges) {

      // edge de x a y sólo si es bidireccional (no DIRIGIDO)
      if (!graph.has(x)) {
          graph.set(x, []);
      }
      graph.get(x).push(y);
      console.log(' Edge from:'+x+' to:'+y)
      // edge de y a a sólo si es DIRIGIDO
      // if (!graph.has(y)) {
      //     graph.set(y, []);
      // }
      // graph.get(y).push(x);

  }
  console.log(' el grafico cargado: ',graph)
}


const edges = [[0, 1], [1, 2], [2, 0], [2, 3]]
buildGraph(edges)

// 2ND- INPUT FORMAT: ADJACENCY LIST -> es un formato MAP y no necesito crear un Map para cargarlo
// The index is the Node and the value de Destination Node to connect - array 2D
// graph = [[1], [2], [0, 3], []].
// the Node 0 -> 1, 1->2, 2->0 and 2->3, 4->4
// graph[i] -> the Node i conect to the nodes


// 3RD- INPUT FORMAT: ADJACENCY MATRIX  -> Traversal O(n^2) 
// load into a Map structure (adjacence list)
// graph[i][j] is 1 -> there is and Edge between Nodes i and j
// graph=[[0,1,0,0],[0,0,1,0],[1,0,0,1],[0,0,0,0]]


//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages
// load into a Map structure (adjacence list)
// we do not load from input array to a Map of adjacence list because we already know
// who are the neighbours (the four nodes around it)



// ABOUT GRAPHS
// load the graph into a Map (in Trees were Nodes.)
// we choose the start node
// a loop to discover the neighbours of a node
// we need a 'seen' array to mark the visited node
// DFS ITERATIVE uses Stack (array) pops the node and adds its neighbours.
// DFS RECURSIVE do no uses Stack but dfs()
// BFS uses Queue for the cells to visit in the future
//   - 1º: nodes with distance 0, 2º nodes with distance 1, 3º nodes with distance 2....
//   - inside the Queue can be nodes of two different levels
// DSU carga la lista de edges creando uniones de nodo a nodo con 'union' y para buscar 'find'
