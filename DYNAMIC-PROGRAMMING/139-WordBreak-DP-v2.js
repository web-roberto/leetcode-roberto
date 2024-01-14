//https://leetcode.com/problems/word-break/solutions/3860456/100-dp-dfs-video-segmenting-a-string/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;
    let max_len = Math.max(...wordDict.map(word => word.length));

    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= Math.max(i - max_len - 1, 0); j--) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};
//Input: 
//const s = "leetcode"; 
//const wordDict = ["leet","code"] //-> Output: true
// Input: s = "applepenapple", wordDict = ["apple","pen"] -> Output: true
// Input: 
const s = "catsandog";
const wordDict = ["cats","dog","sand","and","cat"] //-> Output: false
console.log('---solution',wordBreak(s,wordDict))

