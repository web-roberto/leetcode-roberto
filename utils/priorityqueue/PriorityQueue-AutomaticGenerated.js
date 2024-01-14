
// A) const { Heap, MinHeap, MaxHeap } = require('@datastructures-js/heap');
// B) el convertidor de Java a JS HA CREADO UN HEAD DE 0: https://www.codeconvert.ai/app
        // implementado con ARRAY
//Esta es la solución B y debo aprendermela

class Example {
  static main(args) {
      const heap = new PriorityQueue();
      const nums = [67, 341, 234, -67, 12, -976];
      for (const num of nums) {
          heap.add(num);
      }
      heap.add(7451);
      heap.add(-5352);
      
      while (!heap.isEmpty()) {
          console.log(heap.remove());
      }
  }
}

class PriorityQueue {
  constructor() {
      this.heap = [];
  }
  
  add(value) {
      this.heap.push(value);
      this.heapifyUp();
  }
  
  remove() {
      if (this.isEmpty()) {
          return null;
      }
      
      const root = this.heap[0];
      const last = this.heap.pop();
      
      if (!this.isEmpty()) {
          this.heap[0] = last;
          this.heapifyDown();
      }
      
      return root;
  }
  
  isEmpty() {
      return this.heap.length === 0;
  }
  
  heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex] <= this.heap[index]) {
              break;
          }
          this.swap(parentIndex, index);
          index = parentIndex;
      }
  }
  
  heapifyDown() {
      let index = 0;
      while (index < this.heap.length) {
          const leftChildIndex = 2 * index + 1;
          const rightChildIndex = 2 * index + 2;
          let smallestChildIndex = index;
          
          if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
              smallestChildIndex = leftChildIndex;
          }
          
          if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
              smallestChildIndex = rightChildIndex;
          }
          
          if (smallestChildIndex === index) {
              break;
          }
          
          this.swap(index, smallestChildIndex);
          index = smallestChildIndex;
      }
  }
  
  swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
  }
}
