// Without the prefix sum, answering each query would beO(n) in the worst case, where n is the length of nums. If m = queries.length, that would give a time complexity of 
// O(n∗m). With the prefix sum, it costs 
// O(n) to build, but then answering each query is 
// O(1). This gives a much better time complexity of 
// O(n+m). We use 
// O(n) space to build the prefix sum.


/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @param {number} limit
 * @return {boolean[]}
 */
var answerQueries = function(nums, queries, limit) {
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
      prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
  
  let ans = [];
  for (const [x, y] of queries) {
      let curr = prefix[y] - prefix[x] + nums[x];
      ans.push(curr < limit);
  }
  
  return ans;
};