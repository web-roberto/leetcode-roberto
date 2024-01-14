class MedianFinder {
  constructor() {
      this.minHeap = new PriorityQueue((a, b) => a - b);
      this.maxHeap = new PriorityQueue((a, b) => b - a);
  }
  
  addNum(num) {
      this.maxHeap.push(num);
      this.minHeap.push(this.maxHeap.top());
      this.maxHeap.pop();
      if (this.minHeap.size() > this.maxHeap.size()) {
          this.maxHeap.push(this.minHeap.top());
          this.minHeap.pop();
      }
  }
  
  findMedian() {
      if (this.maxHeap.size() > this.minHeap.size()) {
          return this.maxHeap.top();
      }
      return (this.minHeap.top() + this.maxHeap.top()) / 2.0;
  }
}

class PriorityQueue {
  constructor(compareFn) {
      this.compareFn = compareFn;
      this.heap = [];
  }
  
  push(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
  }
  
  pop() {
      if (this.heap.length === 0) {
          return;
      }
      this.swap(0, this.heap.length - 1);
      const value = this.heap.pop();
      this.bubbleDown(0);
      return value;
  }
  
  top() {
      return this.heap[0];
  }
  
  size() {
      return this.heap.length;
  }
  
  bubbleUp(index) {
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.compareFn(this.heap[index], this.heap[parentIndex]) >= 0) {
              break;
          }
          this.swap(index, parentIndex);
          index = parentIndex;
      }
  }
  
  bubbleDown(index) {
      while (index < this.heap.length) {
          const leftChildIndex = 2 * index + 1;
          const rightChildIndex = 2 * index + 2;
          let smallestChildIndex = index;
          if (leftChildIndex < this.heap.length && this.compareFn(this.heap[leftChildIndex], this.heap[smallestChildIndex]) < 0) {
              smallestChildIndex = leftChildIndex;
          }
          if (rightChildIndex < this.heap.length && this.compareFn(this.heap[rightChildIndex], this.heap[smallestChildIndex]) < 0) {
              smallestChildIndex = rightChildIndex;
          }
          if (smallestChildIndex === index) {
              break;
          }
          this.swap(index, smallestChildIndex);
          index = smallestChildIndex;
      }
  }
  
  swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
  }
}

const ans= new MedianFinder()

// Example 1:
// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]
// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0