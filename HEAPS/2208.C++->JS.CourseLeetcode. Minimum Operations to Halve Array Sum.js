class Solution {
  halveArray(nums) {
      let heap = new MaxHeap(nums);
      let target = 0;
      for (let num of nums) {
          target += num;
      }
      target /= 2;
      let ans = 0;
      while (target > 0) {
          ans++;
          let x = heap.extractMax();
          target -= (x / 2);
          heap.insert(x / 2);
      }
      return ans;
  }
}

class MaxHeap {
  constructor(nums) {
      this.heap = [];
      for (let num of nums) {
          this.insert(num);
      }
  }
  
  insert(num) {
      this.heap.push(num);
      this.bubbleUp(this.heap.length - 1);
  }
  
  extractMax() {
      const max = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = last;
          this.sinkDown(0);
      }
      return max;
  }
  
  bubbleUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
          this.bubbleUp(parentIndex);
      }
  }
  
  sinkDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let maxIndex = index;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
          maxIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
          maxIndex = rightChildIndex;
      }
      if (maxIndex !== index) {
          [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
          this.sinkDown(maxIndex);
      }
  }
}


const ans = new Solution()
const nums = [5,19,8,1]
console.log(ans.halveArray(nums))

// Example 1:
// Input: nums = [5,19,8,1]
// Output: 3
// Explanation: The initial sum of nums is equal to 5 + 19 + 8 + 1 = 33.
// The following is one of the ways to reduce the sum by at least half:
// Pick the number 19 and reduce it to 9.5.
// Pick the number 9.5 and reduce it to 4.75.
// Pick the number 8 and reduce it to 4.
// The final array is [5, 4.75, 4, 1] with a total sum of 5 + 4.75 + 4 + 1 = 14.75. 
// The sum of nums has been reduced by 33 - 14.75 = 18.25, which is at least half of the initial sum, 18.25 >= 33/2 = 16.5.
// Overall, 3 operations were used so we return 3.
// It can be shown that we cannot reduce the sum by at least half in less than 3 operations.
// Example 2:
// Input: nums = [3,8,20]
// Output: 3