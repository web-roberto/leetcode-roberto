class Solution {
  maximum69Number(num) {
      let numString = num.toString();
      for (let i = 0; i < numString.length; i++) {
          if (numString[i] === '6') {
              numString = numString.substring(0, i) + '9' + numString.substring(i + 1);
              break;
          }
      }
      return parseInt(numString);
  }
}
const ans=new Solution()
const num = 9996;
console.log(ans.maximum69Number(num))


// Example 1:
// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:
// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:
// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.