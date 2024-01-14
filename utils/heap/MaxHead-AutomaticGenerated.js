// A) const { Heap, MinHeap, MaxHeap } = require('@datastructures-js/heap');
// B) el convertidor de Java a JS HA CREADO UN HEAD DE 0: https://www.codeconvert.ai/app
        // implementado con ARRAY
//Esta es la solución B y debo aprendermela

class Solution {
  lastStoneWeight(stones) {
      const heap = new MaxHeap();
      for (let stone of stones) {
          heap.add(stone);
      }
      while (heap.size() > 1) {
        // the heap is ordered my Max value. Remove -> takes the highest value
          let first = heap.remove();
          let second = heap.remove();
          if (first !== second) {
              heap.add(first - second);
          }
      }
      return heap.isEmpty() ? 0 : heap.remove();
  }
}

class MaxHeap {
  constructor() {this.heap = [];} // 0-> Max value, length-1 -> Min value
  
  add(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
  }
  
  remove() {
      if (this.isEmpty()) {return null;}
      //el max lo pone al final sólo para eliminarlo del final con pop
      this.swap(0, this.heap.length - 1);
      const removed = this.heap.pop();
      this.bubbleDown(0); //reordeno el elemento 0 que era el del final (el mínimo)
      return removed;
  }
  
  isEmpty() {return this.heap.length === 0;}
  
  size() {return this.heap.length;}
  
  bubbleUp(index) {
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex] >= this.heap[index]) {
              break;
          }
          this.swap(parentIndex, index);
          index = parentIndex;
      }
  }
  
  bubbleDown(index) {
      while (index < this.heap.length) {
          const leftChildIndex = 2 * index + 1;
          const rightChildIndex = 2 * index + 2;
          let largestIndex = index;
          if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
              largestIndex = leftChildIndex;
          }
          if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
              largestIndex = rightChildIndex;
          }
          if (largestIndex === index) {
              break;
          }
          this.swap(index, largestIndex);
          index = largestIndex;
      }
  }
  
  swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
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