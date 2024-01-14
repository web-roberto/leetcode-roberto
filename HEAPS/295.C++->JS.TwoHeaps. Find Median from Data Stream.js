class MedianFinder {
  constructor() {
      this.lo = new MaxHeap();
      this.hi = new MinHeap();
  }
  
  addNum(num) {
      this.lo.insert(num);
      this.hi.insert(this.lo.top());
      this.lo.pop();
      if (this.lo.size() < this.hi.size()) {
          this.lo.insert(this.hi.top());
          this.hi.pop();
      }
  }
  
  findMedian() {
      return this.lo.size() > this.hi.size() ? this.lo.top() : (this.lo.top() + this.hi.top()) * 0.5;
  }
}

class MaxHeap {
  constructor() {
      this.heap = [];
  }
  
  insert(num) {
      this.heap.push(num);
      this.heapifyUp(this.heap.length - 1);
  }
  
  pop() {
      if (this.heap.length === 0) {
          return;
      }
      this.swap(0, this.heap.length - 1);
      this.heap.pop();
      this.heapifyDown(0);
  }
  
  top() {
      return this.heap[0];
  }
  
  size() {
      return this.heap.length;
  }
  
  heapifyUp(index) {
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex] < this.heap[index]) {
              this.swap(parentIndex, index);
              index = parentIndex;
          } else {
              break;
          }
      }
  }
  
  heapifyDown(index) {
      const n = this.heap.length;
      while (index < n) {
          let maxIndex = index;
          const leftChildIndex = 2 * index + 1;
          const rightChildIndex = 2 * index + 2;
          if (leftChildIndex < n && this.heap[leftChildIndex] > this.heap[maxIndex]) {
              maxIndex = leftChildIndex;
          }
          if (rightChildIndex < n && this.heap[rightChildIndex] > this.heap[maxIndex]) {
              maxIndex = rightChildIndex;
          }
          if (maxIndex !== index) {
              this.swap(maxIndex, index);
              index = maxIndex;
          } else {
              break;
          }
      }
  }
  
  swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
  }
}

class MinHeap {
  constructor() {
      this.heap = [];
  }
  
  insert(num) {
      this.heap.push(num);
      this.heapifyUp(this.heap.length - 1);
  }
  
  pop() {
      if (this.heap.length === 0) {
          return;
      }
      this.swap(0, this.heap.length - 1);
      this.heap.pop();
      this.heapifyDown(0);
  }
  
  top() {
      return this.heap[0];
  }
  
  size() {
      return this.heap.length;
  }
  
  heapifyUp(index) {
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex] > this.heap[index]) {
              this.swap(parentIndex, index);
              index = parentIndex;
          } else {
              break;
          }
      }
  }
  
  heapifyDown(index) {
      const n = this.heap.length;
      while (index < n) {
          let minIndex = index;
          const leftChildIndex = 2 * index + 1;
          const rightChildIndex = 2 * index + 2;
          if (leftChildIndex < n && this.heap[leftChildIndex] < this.heap[minIndex]) {
              minIndex = leftChildIndex;
          }
          if (rightChildIndex < n && this.heap[rightChildIndex] < this.heap[minIndex]) {
              minIndex = rightChildIndex;
          }
          if (minIndex !== index) {
              this.swap(minIndex, index);
              index = minIndex;
          } else {
              break;
          }
      }
  }
  
  swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
  }
}
const ans= new MedianFinder()
ans.addNum(41);
ans.addNum(35);
ans.addNum(62);
ans.addNum(4);
console.log(ans.findMedian());

// Adding number 41
// MaxHeap lo: [41]           // MaxHeap stores the largest value at the top (index 0)
// MinHeap hi: []             // MinHeap stores the smallest value at the top (index 0)
// Median is 41
// =======================
// Adding number 35
// MaxHeap lo: [35]
// MinHeap hi: [41]
// Median is 38
// =======================
// Adding number 62
// MaxHeap lo: [41, 35]
// MinHeap hi: [62]
// Median is 41
// =======================
// Adding number 4
// MaxHeap lo: [35, 4]
// MinHeap hi: [41, 62]
// Median is 38
// =======================
// Adding number 97
// MaxHeap lo: [41, 35, 4]
// MinHeap hi: [62, 97]
// Median is 41
// =======================
// Adding number 108
// MaxHeap lo: [41, 35, 4]
// MinHeap hi: [62, 97, 108]
// Median is 51.5