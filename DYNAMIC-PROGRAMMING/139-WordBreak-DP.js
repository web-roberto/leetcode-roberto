
class Solution {
  wordBreak(s, wordDict) {
      function dp(i) {
          if (i < 0) {
              return true;
          }
          for (let word of wordDict) {
              if (s.substring(i - word.length + 1, i + 1) === word && dp(i - word.length)) {
                  return true;
              }
          }
          return false;
      }
      return dp(s.length - 1);
  }
}
//Input: 
//const s = "leetcode"; 
//const wordDict = ["leet","code"] //-> Output: true
// Input: s = "applepenapple", wordDict = ["apple","pen"] -> Output: true
// Input: 
const s = "catsandog";
const wordDict = ["cats","dog","sand","and","cat"] //-> Output: false
const solution= new Solution()
console.log('---solution',solution.wordBreak(s,wordDict))

