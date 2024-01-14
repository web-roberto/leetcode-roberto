const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');

class Solution {
  furthestBuilding(heights, bricks, ladders) {
      const ladderAllocations = new PriorityQueue((a, b) => a - b);
      for (let i = 0; i < heights.length - 1; i++) {
          const climb = heights[i + 1] - heights[i];
          
          if (climb <= 0) {
              continue;
          }
          
          ladderAllocations.enqueue(climb);
          
          if (ladderAllocations.size() <= ladders) {
              continue;
          }
          
          bricks -= ladderAllocations.dequeue();
          
          if (bricks < 0) {
              return i;
          }
      }
      
      return heights.length - 1;
  }
}

const heights = [4,2,7,6,9,14,12]
const bricks = 5
const ladders = 1

const ans= new Solution()
console.log(ans.furthestBuilding(heights, bricks, ladders))

// Example 1:
// Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
// Output: 4
// Explanation: Starting at building 0, you can follow these steps:
// - Go to building 1 without using ladders nor bricks since 4 >= 2.
// - Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
// - Go to building 3 without using ladders nor bricks since 7 >= 6.
// - Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
// It is impossible to go beyond building 4 because you do not have any more bricks or ladders.

// Example 2:
// Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
// Output: 7

// Example 3:
// Input: heights = [14,3,19,3], bricks = 17, ladders = 0
// Output: 3