// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let st = new Set();
  while (n != 1) {
      if (st.has(n)) {
          return false
      }
      else {
          st.add(n);
          n = next(n);
      }
  }
  return true


};

var next = function (x) {
  let temp = 0;
  let n = 0;
  while (x > 0) {
      temp = parseInt(x % 10);
      n += temp * temp
      x = parseInt(x / 10);
  }
  return n
}
console.log(isHappy(19)) //true
console.log(isHappy(2)) //false
