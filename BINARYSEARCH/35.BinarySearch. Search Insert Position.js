

class Solution {
  searchInsert(nums, target) {
    let pivot, left = 0, right = nums.length - 1;
    while (left <= right) {
      pivot = left + Math.floor((right - left) / 2);
      if (nums[pivot] === target) return pivot;
      if (target < nums[pivot]) right = pivot - 1;
      else left = pivot + 1;
    }
    return left;
  }
}
const nums = [1,3,5,6];
const target = 5
const ans = new Solution(nums, target)
console.log(ans.searchInsert(nums, target))


 

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
 