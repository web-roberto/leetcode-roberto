class Solution {
  longestCommonSubsequence(text1, text2) {
      function memo_solve(p1, p2) {
          if (p1 === text1.length || p2 === text2.length) {
              return 0;
          }
          
          const option_1 = memo_solve(p1 + 1, p2);
          
          const first_occurence = text2.indexOf(text1[p1], p2);
          let option_2 = 0;
          if (first_occurence !== -1) {
              option_2 = 1 + memo_solve(p1 + 1, first_occurence + 1);
          }
          
          return Math.max(option_1, option_2);
      }
      
      return memo_solve(0, 0);
  }
}
//  text1 = "abcde", text2 = "ace" -> 3
// text1 = "abc", text2 = "abc" -> 3
//text1 = "abc", text2 = "def" -> 0
const solution= new Solution()
console.log('---- solution',solution.longestCommonSubsequence("abcde","ace"))

