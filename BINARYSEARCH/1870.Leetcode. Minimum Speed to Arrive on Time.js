/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
  let check = k => {
      let t = 0;
      for (const d of dist) {
          t = Math.ceil(t);
          t += d / k;
      }
      
      return t <= hour;
  }
  
  if (dist.length > Math.ceil(hour)) {
      return -1;
  }
  
  let left = 1;
  let right = Math.pow(10, 7);
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (check(mid)) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  
  return left;
};

const dist = [1,3,2]
const hour = 2.7
minSpeedOnTime(dist, hour)

// Example 1:

// Input: dist = [1,3,2], hour = 6
// Output: 1
// Explanation: At speed 1:
// - The first train ride takes 1/1 = 1 hour.
// - Since we are already at an integer hour, we depart immediately at the 1 hour mark. The second train takes 3/1 = 3 hours.
// - Since we are already at an integer hour, we depart immediately at the 4 hour mark. The third train takes 2/1 = 2 hours.
// - You will arrive at exactly the 6 hour mark.
// Example 2:

// Input: dist = [1,3,2], hour = 2.7
// Output: 3
// Explanation: At speed 3:
// - The first train ride takes 1/3 = 0.33333 hours.
// - Since we are not at an integer hour, we wait until the 1 hour mark to depart. The second train ride takes 3/3 = 1 hour.
// - Since we are already at an integer hour, we depart immediately at the 2 hour mark. The third train takes 2/3 = 0.66667 hours.
// - You will arrive at the 2.66667 hour mark.
// Example 3:

// Input: dist = [1,3,2], hour = 1.9
// Output: -1
// Explanation: It is impossible because the earliest the third train can depart is at the 2 hour mark.
