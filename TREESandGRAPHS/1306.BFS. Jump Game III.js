// BFS usa una cola
class Solution {
  canReach(arr, start) {
      let n = arr.length;
      let q = [];
      q.push(start);
      while (q.length > 0) {
          let node = q.shift();
          
          if (arr[node] === 0) {
              return true;
          }
          if (arr[node] < 0) {
              continue;
          }
          
          if (node + arr[node] < n) {
              q.push(node + arr[node]);
          }
          if (node - arr[node] >= 0) {
              q.push(node - arr[node]);
          }
          
          arr[node] = -arr[node];
      }
      return false;
  }
}
const ans=new Solution()
const arr = [4,2,3,0,3,1,2]
const start = 5

console.log(ans.canReach(arr,start))


// Example 1:
// Input: arr = [4,2,3,0,3,1,2], start = 5
// Output: true
// Explanation: 
// All possible ways to reach at index 3 with value 0 are: 
// index 5 -> index 4 -> index 1 -> index 3 
// index 5 -> index 6 -> index 4 -> index 1 -> index 3 
// Example 2:
// Input: arr = [4,2,3,0,3,1,2], start = 0
// Output: true 
// Explanation: 
// One possible way to reach at index 3 with value 0 is: 
// index 0 -> index 4 -> index 1 -> index 3
// Example 3:
// Input: arr = [3,0,2,1,2], start = 2
// Output: false
// Explanation: There is no way to reach at index 1 with value 0.