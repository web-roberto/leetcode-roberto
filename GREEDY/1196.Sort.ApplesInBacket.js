class Solution {
  maxNumberOfApples(arr) {
      arr.sort((a, b) => a - b);
      let apples = 0, units = 0;
      for (let i = 0; i < arr.length && units + arr[i] <= 5000; i++) {
          apples++;
          units += arr[i];
      }
      return apples;
  }
}

const ans=new Solution()
const weight = [100,200,150,1000]
console.log(ans.maxNumberOfApples(weight))


// Example 1:
// Input: weight = [100,200,150,1000]
// Output: 4
// Explanation: All 4 apples can be carried by the basket since their sum of weights is 1450.
// Example 2:
// Input: weight = [900,950,800,1000,700,800]
// Output: 5
// Explanation: The sum of weights of the 6 apples exceeds 5000 so we choose any 5 of them.
 