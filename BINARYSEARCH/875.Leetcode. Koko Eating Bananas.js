/*** @param {number[]} piles
 * @param {number} h
 * @return {number}*/
var minEatingSpeed = function(piles, h) {
  let check = k => {
      let hours = 0;
      for (const bananas of piles) {
          hours += Math.ceil(bananas / k);
      }
      
      return hours <= h;
  }
  let left = 1;
  let right = Math.max(...piles);
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
const  h = 8;
const piles = [3,6,7,11]
minEatingSpeed(piles,h)

// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23
