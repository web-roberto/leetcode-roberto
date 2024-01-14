/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// GRAPH and DFS, Recursive, set of 'seen' or array of booleans 'seen' and the index is the node
//4TH- INPUT FORMAT: MATRIX
// (row, col) of the matrix is a node, and the neighbors are:
//(row - 1, col), (row, col - 1), (row + 1, col), (row, col + 1)
// A NODE is a village and the there are 4 likely villages
// 1st Load the Matrix into a Map con key:node y value:sus vecinos
// Target: number of Connected Components(privinces). A Node is a city
// the time complexity for DFS on graphs is usually O(n+e), where n is the number of nodes 
// and e is the number of edges.
// TIME COMPLEXITY  is O(n^2)because the input is given as an adjacency matrix, so we always need 
// O(n^2) to build the hash map
// SPACE COMPLEXITY : some space for the 'recursion call stack' O(n) and for 'seen'
//  so O(n+e)

let findCircleNum = function(isConnected) {
    // let dfs = node => {
    //     for (const neighbor of graph.get(node)) {
    //         // the next 2 lines are needed to prevent cycles
    //         if (!seen[neighbor]) {
    //             seen[neighbor] = true;
    //             dfs(neighbor);
    //         }
    //     }
    // }
    // ITERATIVE WE ONLY CHANGE DE dfs function
    let dfs = start => {
      //DFS uses STACK and not queue
        let stack = [start];
        while (stack.length) {
          //pops the node and adds the neighbors to the stack
            let node = stack.pop();
            for (const neighbor of graph.get(node)) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    stack.push(neighbor);
                }
            }   
        }
      }


    
    // build the graph
    let n = isConnected.length;
    let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
      //   Initialitze Map:
      //   0:[]
      //   1:[]
      //   2:[]
      //   3:[]
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j]) {
              // only adds the '1's and bidirectional
                graph.get(i).push(j);
                graph.get(j).push(i);
              //    Map of neighbours or destination nodes from my node:
              //   0:[0]
              //   1:[1,3,7]
              //   2:[2,4]
              //   3:[1,3,7]
              //   4:[3,5]
              //   5:[5,6]
              //   6:[5,6]
              //   7:[1,7]
            }
        }
    }
    
    let seen = new Array(n).fill(false); //visited array
    let ans = 0;
    
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            ans++;
            // make as 'seen' before visiting it (before call to dfs with the node i)
            seen[i] = true;
            dfs(i);
        }
    }
    
    return ans;
  };
  const matriz=[[1,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,1],[0,0,1,0,1,0,0,0],[0,1,0,1,0,0,0,1],
  [0,0,1,0,1,0,0,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,1]
  ]
  console.log('The number of provinces is',findCircleNum(matriz))
