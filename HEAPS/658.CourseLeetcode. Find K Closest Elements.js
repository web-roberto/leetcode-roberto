

const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');





class Solution {
  findClosestElements(arr, k, x) {
      let heap = new PriorityQueue();
      for (let num of arr) {
          let distance = Math.abs(x - num);
          heap.push([distance, num]);
          if (heap.size() > k) {
              heap.pop();
          }
      }
      let ans = [];
      while (heap.size() > 0) {
          ans.push(heap.top()[1]);
          heap.pop();
      }
      ans.sort();
      return ans;
  }
}
const ans= new Solution()
const nums = [1,1,1,2,2,3]
const k = 2
console.log(ans.topKFrequent(nums,k))

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
