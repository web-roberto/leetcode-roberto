function calcEquation(equations, values, queries) {
  const graph = new Map();
  
  for (let i = 0; i < equations.length; i++) {
      const equation = equations[i];
      const dividend = equation[0], divisor = equation[1];
      const quotient = values[i];
      if (!graph.has(dividend))
          graph.set(dividend, new Map());
      if (!graph.has(divisor))
          graph.set(divisor, new Map());
      graph.get(dividend).set(divisor, quotient);
      graph.get(divisor).set(dividend, 1 / quotient);
  }
  
  const results = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
      const query = queries[i];
      const dividend = query[0], divisor = query[1];
      if (!graph.has(dividend) || !graph.has(divisor))
          results[i] = -1.0;
      else if (dividend === divisor)
          results[i] = 1.0;
      else {
          const visited = new Set();
          results[i] = backtrackEvaluate(graph, dividend, divisor, 1, visited);
      }
  }
  return results;
}

function backtrackEvaluate(graph, currNode, targetNode, accProduct, visited) {
  visited.add(currNode);
  let ret = -1.0;
  const neighbors = graph.get(currNode);
  if (neighbors.has(targetNode))
      ret = accProduct * neighbors.get(targetNode);
  else {
      for (const [nextNode, value] of neighbors) {
          if (visited.has(nextNode))
              continue;
          ret = backtrackEvaluate(graph, nextNode, targetNode,
                  accProduct * value, visited);
          if (ret !== -1.0)
              break;
      }
  }
  visited.delete(currNode);
  return ret;
}



const equations = [["a","b"],["b","c"]]
const values = [2.0,3.0]
const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
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