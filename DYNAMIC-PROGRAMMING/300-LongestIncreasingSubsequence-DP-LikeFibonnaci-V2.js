const lengthOfLIS = (nums) => {
	let dp = new Array(nums.length).fill(1);
	let longest = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j]+1);
				longest = Math.max(longest, dp[i]);
			}
		}
	}
	return longest;
}
console.log('----', lengthOfLIS([5, 6, 7, 8, 1, 2, 3])) //[5,6,7,8], que son 4