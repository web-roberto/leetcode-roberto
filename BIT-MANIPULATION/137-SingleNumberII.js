
class Solution {
  singleNumber(nums) {
      let loner = 0;
      
      for (let shift = 0; shift < 32; shift++) {
          let bitSum = 0;
          
          for (let num of nums) {
              bitSum += (num >> shift) & 1;
          }
          
          let lonerBit = bitSum % 3;
          loner = loner | (lonerBit << shift);
      }
      
      return loner;
  }
}

//Input: nums = [2,2,3,2] -> Output: 3
// Input: nums = [0,1,0,1,0,1,99] -> Output: 99
const solution= new Solution()
console.log('-----',solution.singleNumber([0,1,0,1,0,1,99]))


