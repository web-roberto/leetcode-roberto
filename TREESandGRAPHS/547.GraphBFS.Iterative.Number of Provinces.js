class Solution {
  bfs(node, isConnected, visit) {
    // BFS uses QUEUE, not STACK
      let q = [];
      q.push(node);
      visit[node] = true;
      while (q.length > 0) {
          node = q.shift();
          for (let i = 0; i < isConnected.length; i++) {
            // for each col inside the row=node
              if (isConnected[node][i] === 1 && !visit[i]) {
                  q.push(i);
                  visit[i] = true;
              }
          }
      }
  }
  findCircleNum(isConnected) {
      let n = isConnected.length;
      let numberOfComponents = 0;
      let visit = new Array(n).fill(false);
      for (let i = 0; i < n; i++) {
        // for each row:
          if (!visit[i]) {
              numberOfComponents++;
              this.bfs(i, isConnected, visit);
          }
      }
      return numberOfComponents;
  }
}
const ans=new Solution()
const matriz=[[1,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,1],[0,0,1,0,1,0,0,0],[0,1,0,1,0,0,0,1],
[0,0,1,0,1,0,0,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,1]
]
console.log('The number of provinces is',ans.findCircleNum(matriz))
