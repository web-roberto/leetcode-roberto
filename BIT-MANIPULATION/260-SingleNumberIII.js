class Solution {
  singleNumber(nums) {
    
    let bitmask = 0;
    for (let num of nums) bitmask ^= num;
    
    let diff = bitmask & (-bitmask);
    let x = 0;
    
    for (let num of nums) if ((num & diff) !== 0) x ^= num;
    return [x, bitmask^x];
  }
}

//Input: nums = [1,2,1,3,2,5] ->Output: [3,5]
//Input: nums = [-1,0] -> Output: [-1,0]
// Input: nums = [0,1] -> Output: [1,0]

const solution= new Solution()
console.log('-----',solution.singleNumber([-1,0]))