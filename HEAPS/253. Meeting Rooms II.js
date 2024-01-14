const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');

class Solution {
  minMeetingRooms(intervals) {
  
  if (intervals.length === 0) {return 0;}
  
  const allocator = new PriorityQueue(
   //   intervals.length,
      function(a, b) {
          return a - b;
      });

  intervals.sort(
      function(a, b) {
          return a[0] - b[0];
      });
  
  allocator.enqueue(intervals[0][1]);
  
  for (let i = 1; i < intervals.length; i++) {
    
    if (intervals[i][0] >= allocator.front()) {
      allocator.dequeue();
    }

    
    allocator.enqueue(intervals[i][1]);
  }
  
  return allocator.size();
}
}
const intervals = [[0,30],[5,10],[15,20]]
const ans= new Solution()
console.log(ans.minMeetingRooms(intervals))


// Example 1:
// Inpt: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:
// Input: intervls = [[7,10],[2,4]]
// Output: 1
