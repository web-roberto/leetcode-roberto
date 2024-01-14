// use TEMPLATE: 
// https://leetcode.com/problems/squares-of-a-sorted-array/editorial/
// PYTHON: Approach 1: Sort: Intuition and Algorithm
// PYTHON: Approach 2: Two Pointer

// DESCRIPTION:
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
//Time Complexity: O(Nlog⁡N)O(N \log N)O(NlogN), where NNN is the length of A.
// Space complexity : O(N)\mathcal{O}(N)O(N) or O(log⁡N)\mathcal{O}(\log{N})O(logN)
let fn = arr => {
  let  ans = [], n = arr.length - 1;
  i=0;
  while (i <= n) {
     ans[i]=arr[i]*arr[i]
      i++;
  }
  console.log('---ans es:',ans)
  return ans.sort(function(a, b) {
    return a - b;
  })
}
console.log(fn([-3,-2,1,4,5]))
