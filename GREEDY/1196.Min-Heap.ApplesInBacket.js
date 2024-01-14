class Solution {
  maxNumberOfApples(weight) {
      let max_weight = 5000;
      let curr_weight = 0;
      let num_of_baskets = 0;
      let minHeap = new PriorityQueue(weight);
      while(!minHeap.empty()){
          if(curr_weight+minHeap.top()<=max_weight){
              curr_weight+= minHeap.top(); minHeap.pop();
              num_of_baskets++;
          }
          else return num_of_baskets;
      }
      return num_of_baskets;
  }
}

class PriorityQueue {
  constructor(arr) {
      this.heap = [];
      for(let i = 0; i < arr.length; i++) {
          this.push(arr[i]);
      }
  }
  
  push(val) {
      this.heap.push(val);
      this.bubbleUp(this.heap.length - 1);
  }
  
  pop() {
      if(this.heap.length === 0) {
          return null;
      }
      const min = this.heap[0];
      const last = this.heap.pop();
      if(this.heap.length > 0) {
          this.heap[0] = last;
          this.bubbleDown(0);
      }
      return min;
  }
  
  top() {
      if(this.heap.length === 0) {
          return null;
      }
      return this.heap[0];
  }
  
  empty() {
      return this.heap.length === 0;
  }
  
  bubbleUp(index) {
      while(index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if(this.heap[parentIndex] > this.heap[index]) {
              this.swap(parentIndex, index);
              index = parentIndex;
          } else {
              break;
          }
      }
  }
  
  bubbleDown(index) {
      const lastIndex = this.heap.length - 1;
      while(true) {
          const leftChildIndex = index * 2 + 1;
          const rightChildIndex = index * 2 + 2;
          let minIndex = index;
          if(leftChildIndex <= lastIndex && this.heap[leftChildIndex] < this.heap[minIndex]) {
              minIndex = leftChildIndex;
          }
          if(rightChildIndex <= lastIndex && this.heap[rightChildIndex] < this.heap[minIndex]) {
              minIndex = rightChildIndex;
          }
          if(minIndex !== index) {
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



const ans=new Solution()
const weight = [100,200,150,1000]
console.log(ans.maxNumberOfApples(weight))


// Example 1:
// Input: weight = [100,200,150,1000]
// Output: 4
// Explanation: All 4 apples can be carried by the basket since their sum of weights is 1450.
// Example 2:
// Input: weight = [900,950,800,1000,700,800]
// Output: 5
// Explanation: The sum of weights of the 6 apples exceeds 5000 so we choose any 5 of them.
 