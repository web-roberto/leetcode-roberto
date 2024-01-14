//https://leetcode.com/problems/single-number/editorial/
class Solution {
  singleNumber(nums) {
    let a = 0;
    for (let i of nums) {
      a ^= i;
    }
    return a;
  }
}
//Input: nums = [2,2,1] -> Output: 1
// Input: nums = [4,1,2,1,2] -> Output: 4
// Input: nums = [1] -> Output: 1
const solution= new Solution()
console.log('-----',solution.singleNumber([4,1,2,1,2]))