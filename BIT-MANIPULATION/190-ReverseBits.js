//https://leetcode.com/problems/reverse-bits/description/
class Solution {
  reverseBits(n) {
    let ret = 0, power = 31;
    while (n !== 0) {
      ret += (n & 1) << power;
      n = n >> 1;
      power -= 1;
    }
    return ret;
  }
}
//Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Input: n = 11111111111111111111111111111101
//Output:   3221225471 (10111111111111111111111111111111)
 const solution= new Solution()
console.log('-----',solution.reverseBits(01000001111010011100))