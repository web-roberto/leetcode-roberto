class Solution {
  maximum69Number(num) {
      let numCopy = num;
      let indexFirstSix = -1;
      let currDigit = 0;
      
      while (numCopy > 0) {
          if (numCopy % 10 === 6)
              indexFirstSix = currDigit;
          
          numCopy = Math.floor(numCopy / 10);
          currDigit++;
      }
      
      return indexFirstSix === -1 ? num : num + 3 * Math.pow(10, indexFirstSix);
  }
}
const ans=new Solution()
const num = 9669;
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