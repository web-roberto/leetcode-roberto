//

/*** @param {number[]} arr
 * @param {number} k
 * @return {number}**/

var findLeastNumOfUniqueInts = function(arr, k) {
  let m = new Map();
  arr.forEach(num => m.set(num, m.get(num)+1 || 1));
  let occurrences = Array.from(m.values());
  occurrences.sort((a,b) => a-b);
  let res = occurrences.length;
  for (let num of occurrences) {
      if (k >= num) {
          k -= num;
          res--;
      }
      else return res;
  }
  return res;
  // Time Complexity: O(nlog(n))
  // Space Complexity: O(n)
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
 