let smallestDivisor = function(nums, threshold) {
  const maxElement = nums.reduce((a, b) => Math.max(a, b), nums[0]);

  // Iterate on all divisors.
  for (let divisor = 1; divisor <= maxElement; ++divisor) {
      let sumOfDivisionResults = 0;
      let thresholdExceeded = true;

      // Divide all numbers of array and sum the result.
      for (let index in nums) {
          const num = nums[index];
          sumOfDivisionResults += Math.ceil((1.0 * num) / divisor);
          
          if (sumOfDivisionResults > threshold) {
              thresholdExceeded = false;
              break;
          }
      }

      // If threshold was not exceeded then return current divisor.
      if (thresholdExceeded) {
          return divisor;
      }
  }

  return -1;
};
const nums = [44,22,33,11,1]
const threshold = 5
console.log(smallestDivisor(nums, threshold))

// Example 1:

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 
// Example 2:

// Input: nums = [44,22,33,11,1], threshold = 5
// Output: 44
