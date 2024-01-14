class Solution {
  rangeBitwiseAnd(m, n) {
    let shift = 0;
    
    while (m < n) {
      m >>= 1;
      n >>= 1;
      ++shift;
    }
    return m << shift;
  }
}
//Input: left = 5, right = 7 -> Output: 4
// Input: left = 0, right = 0 -> Output: 0
// Input: left = 1, right = 2147483647 -> Output: 0
const solution= new Solution()
console.log('-----',solution.rangeBitwiseAnd(5,7))