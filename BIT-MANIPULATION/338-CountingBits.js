class Solution {
  countBits(n) {
      function pop_count(x) {
          let count = 0;
          while (x !== 0) {
              x &= x - 1;
              count += 1;
          }
          return count;
      }
      let ans = new Array(n + 1).fill(0);
      for (let x = 0; x <= n; x++) {
          ans[x] = pop_count(x);
      }
      return ans;
  }

}
//Input: n = 2 -> Output: [0,1,1]
//Input: n = 5 -> Output: [0,1,1,2,1,2]
const solution= new Solution()
console.log('-----',solution.countBits(5))

