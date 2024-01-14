const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');

class Solution {
  topKFrequent(nums, k) {
      
      if (k === nums.length) {
          return nums;
      }
      let count = new Map();
      for (let n of nums) {
        count.set(n, (count.get(n) || 0) + 1);
      }
      let heap = new PriorityQueue(
          (n1, n2) => count.get(n1) - count.get(n2));
      for (let n of count.keys()) {
        heap.enqueue(n);
        if (heap.size() > k) heap.dequeue();    
      }
      
      let top = new Array(k);
      for(let i = k - 1; i >= 0; --i) {
          top[i] = heap.dequeue();
      }
      return top;
  }
}
const ans = new Solution()
const nums = [1,1,1,2,2,3]
const k = 2
console.log(ans.topKFrequent(nums,k))


// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]