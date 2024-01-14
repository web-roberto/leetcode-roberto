/*** @param {number[]} arr
 * @param {number} k
 * @return {number}*/
var findLeastNumOfUniqueInts = function(arr, k) {
  let counts = new Map();
  for (const num of arr) {
      counts.set(num, (counts.get(num) || 0) + 1);
  }
  
  let ordered = [];
  for (const val of counts.values()) {
      ordered.push(val);
  }
  
  ordered.sort((a, b) => b - a);
  while (k > 0) {
      let val = ordered[ordered.length - 1];
      if (val <= k) {
          k -= val;
          ordered.pop();
      } else {
          break;
      }
  }
  return ordered.length;
};

const arr=[4,3,1,1,3,3,2];
const k=3;

findLeastNumOfUniqueInts(arr, k);

// Example 1:
// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
 