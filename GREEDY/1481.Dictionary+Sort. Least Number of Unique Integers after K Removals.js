var findLeastNumOfUniqueInts = function(arr, k) {
  arr.sort()
  const counts = arr.reduce((acc, curr) => { 
      acc[curr] = acc[curr] ? acc[curr] + 1: 1;
      return acc;
  }, {});
  
  arr.sort((a, b) => counts[a] - counts[b]);
  return new Set(arr.slice(k)).size;
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
 