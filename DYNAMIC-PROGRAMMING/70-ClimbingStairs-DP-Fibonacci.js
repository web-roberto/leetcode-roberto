//https://leetcode.com/problems/climbing-stairs/solutions/3137892/dp-easy-js-sol-approachable-code/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
  if (n < 2) {
      return 1;
  }
  
  let firstStep = 1;
  
  let secondStep = 1;
  
  let thirdStep = 0;
  
  for (let i = 2; i <= n; i++) {
      
      thirdStep = firstStep + secondStep;
      
      firstStep = secondStep;
      
      secondStep = thirdStep;
  }
  return thirdStep;
};
console.log('--Climbing Stairs-',climbStairs(5))