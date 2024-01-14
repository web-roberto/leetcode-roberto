/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// BFS con su cola
// equations son la lista de edges sin ponderar
// values es el peso de cada edge

let calcEquation = function(equations, values, queries) {
  let answerQuery = (start, end) => { //nuevo recorrido BFS para resolver una única query (como ["a","c"], a/c=?)
      // no info on this node
      if (!graph.has(start)) {
          return -1;
      }
      let seen = new Set([start]); //set de visitados para ese nodo origen
      let stack = [[start, 1]];   // la pila del BFS donde el peso del edge es 1 por defecto
      
      while (stack.length) { //saca de la cola el nodo actual y mete a sus hijos o vecinos
          const [node, ratio] = stack.pop();
          if (node == end) {
              return ratio;
          }
          if (graph.has(node)) {
              for (const [neighbor, val] of graph.get(node)) {
                  if (!seen.has(neighbor)) {
                      seen.add(neighbor);
                      stack.push([neighbor, ratio * val]);
                  }
              }
          }
      }
      
      return -1;
  }
   
  let graph = new Map(); //crea la lista de adyacencias ponderado
  for (let i = 0; i < equations.length; i++) {
      const [numerator, denominator] = equations[i]; //a (numerator) -> b (denominator)
      const val = values[i];
      if (!graph.has(numerator)) {
          graph.set(numerator, new Map()); //un Map para cada nodo
      }
      if (!graph.has(denominator)) {
          graph.set(denominator, new Map());
      }
      
      graph.get(numerator).set(denominator, val); //crea adyacencia (nodo destino) con su ponderación
      graph.get(denominator).set(numerator, 1 / val); //el camino contrario a arriba
  }
  
  let ans = [];
  for (const [numerator, denominator] of queries) {
      ans.push(answerQuery(numerator, denominator));
  }
  
  return ans;
};
const equations = [["a","b"],["b","c"]] //edges todavía sin los pesos
const values = [2.0,3.0] //a/b=2.0 and b/c=3.0 -> son los pesos de los edges de arriba
const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]] //a/c=?,b/a=?,a/e=?,a/a=?,x/x=?
//pregunta por los edges
console.log(calcEquation(equations, values, queries) )


// Example 1:
// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation: 
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// note: x is undefined => -1.0

// Example 2:
// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
// Example 3:
// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]