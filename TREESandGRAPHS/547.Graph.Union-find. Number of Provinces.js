// NO HE ESTUDIADO AUN LOS UNION-FIND

class UnionFind {
  constructor(size) {
      this.parent = new Array(size);
      for (let i = 0; i < size; i++) {
          this.parent[i] = i;
      }
      this.rank = new Array(size).fill(0);
  }
  find(x) {
      if (this.parent[x] !== x) {
          this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
  }
  union_set(x, y) {
      let xset = this.find(x);
      let yset = this.find(y);
      if (xset === yset) {
          return;
      } else if (this.rank[xset] < this.rank[yset]) {
          this.parent[xset] = yset;
      } else if (this.rank[xset] > this.rank[yset]) {
          this.parent[yset] = xset;
      } else {
          this.parent[yset] = xset;
          this.rank[xset]++;
      }
  }
}

class Solution {
  findCircleNum(isConnected) {
      let n = isConnected.length;
      let dsu = new UnionFind(n);
      let numberOfComponents = n;
      for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
              if (isConnected[i][j] === 1 && dsu.find(i) !== dsu.find(j)) {
                  numberOfComponents--;
                  dsu.union_set(i, j);
              }
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
