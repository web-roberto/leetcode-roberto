class Solution {
  lastStoneWeight(stones) {
      let heap = new MaxHeap(stones);
      while (heap.size() > 1) {
          let first = heap.extractMax();
          let second = heap.extractMax();
          if (first !== second) {
              heap.insert(first - second);
          }
      }
      return heap.isEmpty() ? 0 : heap.getMax();
  }
}

class MaxHeap {
  constructor(arr) {
      this.heap = [];
      for (let i = 0; i < arr.length; i++) {
          this.insert(arr[i]);
      }
  }
  
  insert(val) {
      this.heap.push(val);
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
  
  getMax() {
      return this.heap[0];
  }
  
  isEmpty() {
      return this.heap.length === 0;
  }
  
  size() {
      return this.heap.length;
  }
  
  bubbleUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
          this.swap(index, parentIndex);
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
          this.swap(index, maxIndex);
          this.sinkDown(maxIndex);
      }
  }
  
  swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

const ans = new Solution()
const stones = [2,7,4,1,8,1]
console.log(ans.lastStoneWeight(stones) )
// Example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:
// Input: stones = [1]
// Output: 1
