
const {
    PriorityQueue,
  } = require('@datastructures-js/priority-queue');

class Solution {
  binarySearch(row) {
      let low = 0;
      let high = row.length;
      while (low < high) {
          let mid = low + Math.floor((high - low) / 2);
          if (row[mid] === 1) {
              low = mid + 1;
          } else {
              high = mid;
          }
      }
      return low;
  }
  kWeakestRows(mat, k) {
      let m = mat.length;
      let n = mat[0].length;
      
      let pq = new PriorityQueue((a, b) => {
          if (a[0] === b[0]) return b[1] - a[1];
          else return b[0] - a[0];
      });
      
      for (let i = 0; i < m; i++) {
          let strength = this.binarySearch(mat[i]);
          let entry = [strength, i];
          pq.enqueue(entry);
          if (pq.size() > k) {
              pq.dequeue();
          }
      }
      
      let indexes = new Array(k);
      for (let i = k - 1; i >= 0; i--) {
          let pair = pq.dequeue();
          indexes[i] = pair[1];
      }
      return indexes;
  }
}
const mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]
const k = 3
const ans= new Solution()
console.log(ans.kWeakestRows(mat,k)
)



// Example 1:
// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 2 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 2 
// - Row 4: 5 
// The rows ordered from weakest to strongest are [2,0,3,1,4].
// Example 2:
// Input: mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// Output: [0,2]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 1 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 1 
// The rows ordered from weakest to strongest are [0,2,3,1].