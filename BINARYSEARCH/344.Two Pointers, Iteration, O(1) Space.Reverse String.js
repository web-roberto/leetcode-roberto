// en JS no se puede cambiar un array????
class Solution {
  reverseString(s) {
      let left = 0, right = s.length - 1;
      while (left < right) {
          let tmp = s[left];
          s[left++] = s[right];
          s[right--] = tmp;
      }
  return s;
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