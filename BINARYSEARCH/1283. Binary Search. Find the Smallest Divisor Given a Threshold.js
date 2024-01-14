// Return the sum of division results with 'divisor'.
let findDivisionSum = (nums, divisor) => {
  let result = 0;
  for (let index in nums) {
      const num = nums[index];
      result += Math.ceil((1.0 * num) / divisor);
  }
  return result;
}

let smallestDivisor = function(nums, threshold) {
  let ans = -1;
      
  let low = 1;
  let high = nums.reduce((a, b) => Math.max(a, b), nums[0]);

  // Iterate using binary search on all divisors.
  while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const result = findDivisionSum(nums, mid);
      // If current divisor does not exceed threshold, 
      // then it can be our answer, but also try smaller divisors
      // thus change search space to left half.
      if (result <= threshold) {
          ans = mid;
          high = mid - 1;
      }
      // Otherwise, we need a bigger divisor to reduce the result sum
      // thus change search space to right half.
      else {
          low = mid + 1;
      }
  }

  return ans;
};
const nums = [44,22,33,11,1]
const threshold = 5
console.log(findDivisionSum(nums, threshold))

// Example 1:

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 
// Example 2:

// Input: nums = [44,22,33,11,1], threshold = 5
// Output: 44
