// en JS no se puede cambiar un array????

class Solution {
  helper(s, left, right) {
    if (left >= right) return;
    let tmp = s[left];
    s[left++] = s[right];
    s[right--] = tmp;
    this.helper(s, left, right);
  }
  reverseString(s) {
     this.helper(s, 0, s.length - 1);
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