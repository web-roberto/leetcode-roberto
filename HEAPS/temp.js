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
          let smallestIndex = index;
          if (leftChildIndex < this.heap.length && this.compareFn(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
              smallestIndex = leftChildIndex;
          }
          if (rightChildIndex < this.heap.length && this.compareFn(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
              smallestIndex = rightChildIndex;
          }
          if (smallestIndex === index) {
              break;
          }
          this.swap(index, smallestIndex);
          index = smallestIndex;
      }
  }
  
  swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
  }
}

