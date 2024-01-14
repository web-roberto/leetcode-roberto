class Solution {
  grayCode(n) {
      let result = [];
      
      let sequenceLength = 1 << n;
      for (let i = 0; i < sequenceLength; i++) {
          let num = i ^ i >> 1;
          result.push(num);
      }
      return result;
  }
}

//Input: n = 2 -> Output: [0,1,3,2]
//Input: n = 1 -> Output: [0,1]
const solution= new Solution()
console.log('-----',solution.grayCode(1))