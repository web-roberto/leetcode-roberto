
// Example 1: Given a string s, return true if it is a palindrome, false otherwise.
// A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

// using TEMPLATE: Two pointers: one input, opposite end

/**
 * @param {string} s
 * @return {boolean}
 */
var checkIfPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
      if (s[left] != s[right]) {
          return false;
      }
      
      left++;
      right--;
  }
  
  return true;
}