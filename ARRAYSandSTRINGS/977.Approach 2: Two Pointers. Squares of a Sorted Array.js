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

//For example, with [-3, -2, -1, 4, 5, 6], we have the negative part [-3, -2, -1] with squares [9, 4, 1], and the positive part [4, 5, 6] with squares [16, 25, 36]. Our strategy is to iterate over the negative part in reverse, and the positive part in the forward direction.
// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

//Time Complexity: O(N), where N is the length of A.
//Space Complexity: O(N) if you take output into account and O(1) otherwise.

let fn = nums => {
  const n = nums.length;
  const result = [];
  let left = 0;
  let right = n - 1;

  for (let i = n - 1; i >= 0; i--) {
      let square;
      //I guess that it is already ordered: at the beginning negatives, after positives.
      if (Math.abs(nums[left]) < Math.abs(nums[right])) {
          square = nums[right];
          right--;
      } else {
          square = nums[left];
          left++;
      }
      result[i] = square * square;
  }
  return result;
}

console.log(fn([-3,-2,1,4,5]))