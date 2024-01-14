//const { Heap, MinHeap, MaxHeap } = require('@datastructures-js/heap');

const { Heap, MinHeap, MaxHeap } = require('@datastructures-js/heap');

class Solution {
  lastStoneWeight(stones) {
      const heap = new MaxHeap();
      for (let stone of stones) {
          heap.push(stone);
      }
      while (heap.size() > 1) {
        // the heap is ordered my Max value. Remove -> takes the highest value
          let first = heap.pop();
          let second = heap.pop();
          if (first !== second) {
              heap.push(first - second);
          }
      }
      return heap.isEmpty() ? 0 : heap.pop();
  }
}

// class MaxHeap {
//   constructor() {
//       this.heap = [];
//   }
  
//   add(value) {
//       this.heap.push(value);
//       this.bubbleUp(this.heap.length - 1);
//   }
  
//   remove() {
//       if (this.isEmpty()) {
//           return null;
//       }
//       this.swap(0, this.heap.length - 1);
//       const removed = this.heap.pop();
//       this.bubbleDown(0);
//       return removed;
//   }
  
//   isEmpty() {
//       return this.heap.length === 0;
//   }
  
//   size() {
//       return this.heap.length;
//   }
  
//   bubbleUp(index) {
//       while (index > 0) {
//           const parentIndex = Math.floor((index - 1) / 2);
//           if (this.heap[parentIndex] >= this.heap[index]) {
//               break;
//           }
//           this.swap(parentIndex, index);
//           index = parentIndex;
//       }
//   }
  
//   bubbleDown(index) {
//       while (index < this.heap.length) {
//           const leftChildIndex = 2 * index + 1;
//           const rightChildIndex = 2 * index + 2;
//           let largestIndex = index;
//           if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
//               largestIndex = leftChildIndex;
//           }
//           if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
//               largestIndex = rightChildIndex;
//           }
//           if (largestIndex === index) {
//               break;
//           }
//           this.swap(index, largestIndex);
//           index = largestIndex;
//       }
//   }
  
//   swap(index1, index2) {
//       [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//   }
// }

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