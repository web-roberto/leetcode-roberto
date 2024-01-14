class Solution {
  calcEquation(equations, values, queries) {
      const gidWeight = new Map();
      
      for (let i = 0; i < equations.length; i++) {
          const equation = equations[i];
          const dividend = equation[0], divisor = equation[1];
          const quotient = values[i];
          this.union(gidWeight, dividend, divisor, quotient);
      }
      
      const results = new Array(queries.length);
      for (let i = 0; i < queries.length; i++) {
          const query = queries[i];
          const dividend = query[0], divisor = query[1];
          if (!gidWeight.has(dividend) || !gidWeight.has(divisor))
              results[i] = -1.0;
          else {
              const dividendEntry = this.find(gidWeight, dividend);
              const divisorEntry = this.find(gidWeight, divisor);
              const dividendGid = dividendEntry[0];
              const divisorGid = divisorEntry[0];
              const dividendWeight = dividendEntry[1];
              const divisorWeight = divisorEntry[1];
              if (dividendGid !== divisorGid)
                  results[i] = -1.0;
              else
                  results[i] = dividendWeight / divisorWeight;
          }
      }
      return results;
  }
  
  find(gidWeight, nodeId) {
      if (!gidWeight.has(nodeId))
          gidWeight.set(nodeId, [nodeId, 1.0]);
      let entry = gidWeight.get(nodeId);
      
      if (entry[0] !== nodeId) {
          const newEntry = this.find(gidWeight, entry[0]);
          gidWeight.set(nodeId, [newEntry[0], entry[1] * newEntry[1]]);
      }
      return gidWeight.get(nodeId);
  }
  
  union(gidWeight, dividend, divisor, value) {
      const dividendEntry = this.find(gidWeight, dividend);
      const divisorEntry = this.find(gidWeight, divisor);
      const dividendGid = dividendEntry[0];
      const divisorGid = divisorEntry[0];
      const dividendWeight = dividendEntry[1];
      const divisorWeight = divisorEntry[1];
      
      if (dividendGid !== divisorGid) {
          gidWeight.set(dividendGid, [divisorGid, divisorWeight * value / dividendWeight]);
      }
  }
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