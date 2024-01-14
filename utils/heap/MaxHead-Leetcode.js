
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