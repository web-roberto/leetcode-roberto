
const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');


class KthLargest {
  constructor(k, nums) {
      this.k = k;
      this.heap = new PriorityQueue((a, b) => a - b);

      for (let num of nums) {
          this.heap.enqueue(num);
      }
      while (this.heap.size() > k) {
          this.heap.dequeue();
      }
  }
  add(val) {
      this.heap.enqueue(val);
      if (this.heap.size() > this.k) {
          this.heap.dequeue();
      }
      return this.heap.front();
  }
}
const ans = new KthLargest(3, [4, 5, 8, 2])
ans.add(3);   // return 4
ans.add(5);   // return 5
ans.add(10);  // return 5
ans.add(9);   // return 8
console.log(ans.add(4))// return 8



// Example 1:
// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8