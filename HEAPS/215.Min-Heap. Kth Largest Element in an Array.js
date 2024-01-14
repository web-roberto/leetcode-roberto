
// mete los elementos del array al MaxHeap (una colar de prioridad)
// usa una MaxHeap con nºs negativos para obtener un MinHeap
class Solution {
  findKthLargest(nums, k) {
      let heap = new MaxHeap();
      for (let num of nums) {
          heap.insert(-num);
          if (heap.size() > k) {
              heap.extractMax();
          }
      }
      return -heap.getMax();
  }
}

class MaxHeap {
  constructor() {
      this.heap = [];
  }
  
  insert(value) {
      this.heap.push(value);
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
const ans= new Solution()
const nums = [3,2,1,5,6,4]
const k = 2
console.log(ans.findKthLargest(nums,k))




// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4