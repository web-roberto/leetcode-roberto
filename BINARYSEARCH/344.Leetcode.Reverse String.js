// en JS no se puede cambiar un array????
class Solution {
  reverseString(s) {
      this.helper(0, s.length - 1, s);
      return s;
  }
  
  helper(start, end, s) {
      if (start >= end) {
          return;
      }
      
      let tmp = s[start];
      s[start] = s[end];
      s[end] = tmp;
      this.helper(start + 1, end - 1, s);
  }
}


const ans= new Solution()
var mys = ["h","e","l","l","o"]
console.log(ans.reverseString(mys))

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]