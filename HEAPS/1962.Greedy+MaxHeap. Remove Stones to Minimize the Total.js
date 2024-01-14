
class Solution {
  minStoneSum(piles, k) {
      let heap = new MaxHeap(piles);
      let totalSum = piles.reduce((acc, curr) => acc + curr, 0);
      for (let i = 0; i < k; i++) {
          let curr = heap.pop();
          let remove = Math.floor(curr / 2);
          totalSum -= remove;
          heap.push(curr - remove);
      }
      return totalSum;
  }
}

class MaxHeap {
  constructor(arr) {
      this.heap = arr;
      this.buildHeap();
  }
  
  buildHeap() {
      let n = this.heap.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          this.heapify(i, n);
      }
  }
  
  heapify(i, n) {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      
      if (left < n && this.heap[left] > this.heap[largest]) {
          largest = left;
      }
      
      if (right < n && this.heap[right] > this.heap[largest]) {
          largest = right;
      }
      
      if (largest !== i) {
          [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
          this.heapify(largest, n);
      }
  }
  
  push(val) {
      this.heap.push(val);
      let i = this.heap.length - 1;
      let parent = Math.floor((i - 1) / 2);
      
      while (i > 0 && this.heap[i] > this.heap[parent]) {
          [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
          i = parent;
          parent = Math.floor((i - 1) / 2);
      }
  }
  
  pop() {
      let n = this.heap.length;
      if (n === 0) {
          return null;
      }
      
      let root = this.heap[0];
      this.heap[0] = this.heap[n - 1];
      this.heap.pop();
      this.heapify(0, n - 1);
      
      return root;
  }
}
const ans =new Solution()
const piles = [5,4,9]
const k = 2
console.log(ans.minStoneSum(piles,k))

// Example 1:
// Input: piles = [5,4,9], k = 2
// Output: 12
// Explanation: Steps of a possible scenario are:
// - Apply the operation on pile 2. The resulting piles are [5,4,5].
// - Apply the operation on pile 0. The resulting piles are [3,4,5].
// The total number of stones in [3,4,5] is 12.

// Example 2:
// Input: piles = [4,3,6,7], k = 3
// Output: 12
// Explanation: Steps of a possible scenario are:
// - Apply the operation on pile 2. The resulting piles are [4,3,3,7].
// - Apply the operation on pile 3. The resulting piles are [4,3,3,4].
// - Apply the operation on pile 0. The resulting piles are [2,3,3,4].
// The total number of stones in [2,3,3,4] is 12.

