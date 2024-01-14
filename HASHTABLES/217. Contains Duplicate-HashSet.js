// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Time complexity: O(n)O(n)O(n).
// We do search() and insert() for nnn times and each operation takes constant time.
// Space complexity: O(n)O(n)O(n).
// The space used by a hash table is linear with the number of elements in it.

let fn = (nums) => {
  hashSet = new Set(nums.lenght);
  for (let num of nums) {
      if (hashSet.has(num)) return true;
      hashSet.add(num);
  }
  return false;
}
console.log(fn([1,4,5,4,2,3]))