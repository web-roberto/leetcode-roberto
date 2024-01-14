function maximumScore(nums, multipliers) {
  const memo = new Map();

  function dp(i, left) {
    if (i === multipliers.length) {
      return 0;
    }

    const mult = multipliers[i];
    const right = nums.length - 1 - (i - left);

    if (memo.has(`${i}-${left}`)) {
      return memo.get(`${i}-${left}`);
    }

    const score = Math.max(
      mult * nums[left] + dp(i + 1, left + 1),
      mult * nums[right] + dp(i + 1, left)
    );

    memo.set(`${i}-${left}`, score);
    return score;
  }

  return dp(0, 0);
}
// nums = [1,2,3], multipliers = [3,2,1] -> 14
//nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6] -> 102
console.log('---solucion--',maximumScore([-5,-3,-3,-2,7,1],[-10,-5,3,4,6]))
