const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');

class MyHeapNode {
  constructor(v, r, c) {
    this.value = v;
    this.row = r;
    this.column = c;
  }
  getValue() {
    return this.value;
  }
  getRow() {
    return this.row;
  }
  getColumn() {
    return this.column;
  }
}

class MyHeapComparator {
  compare(x, y) {
    return x.value - y.value;
  }
}

class Solution {
  kthSmallest(matrix, k) {
    const N = matrix.length;
    const minHeap = new PriorityQueue((a, b) => a.value - b.value);
    
    for (let r = 0; r < Math.min(N, k); r++) {
      minHeap.enqueue(new MyHeapNode(matrix[r][0], r, 0));
    }
    
    let element = minHeap.front();
    while (k-- > 0) {
      element = minHeap.dequeue();
      const r = element.getRow();
      const c = element.getColumn();
      
      if (c < N - 1) {
        minHeap.enqueue(new MyHeapNode(matrix[r][c + 1], r, c + 1));
      }
    }
    
    return element.getValue();
  }
}
const matrix = [[1,5,9],[10,11,13],[12,13,15]]
const k = 8
const ans= new Solution()
console.log(ans.kthSmallest(matrix,k))

// Example 1:
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:
// Input: matrix = [[-5]], k = 1
// Output: -5