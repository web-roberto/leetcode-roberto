class Solution {
  getSum(a, b) {
      let x = Math.abs(a);
      let y = Math.abs(b);

      if (x < y) {
          return this.getSum(b, a);
      }

      let sign = a > 0 ? 1 : -1;
      if (a * b >= 0) {
          while (y) {
              let answer = x ^ y;
              let carry = (x & y) << 1;
              x = answer;
              y = carry;
          }
      } else {
          while (y) {
              let answer = x ^ y;
              let borrow = (~x & y) << 1;
              x = answer;
              y = borrow;
          }
      }
      return x * sign;
  }
}

//Input: a = 1, b = 2 -> Output: 3
// Input: a = 2, b = 3 -> Output: 5
const solution= new Solution()
console.log('-----',solution.getSum(2,3))