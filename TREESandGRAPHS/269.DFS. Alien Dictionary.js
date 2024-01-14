class Solution {
  constructor() {
      this.reverseAdjList = new Map();
      this.seen = new Map();
      this.output = "";
  }
  
  alienOrder(words) {
      // Step 0: Put all unique letters into reverseAdjList as keys.
      for (let word of words) {
          for (let c of word) {
              if (!this.reverseAdjList.has(c)) {
                  this.reverseAdjList.set(c, []);
              }
          }
      }
      
      // Step 1: Find all edges and add reverse edges to reverseAdjList.
      for (let i = 0; i < words.length - 1; i++) {
          let word1 = words[i];
          let word2 = words[i + 1];
          
          // Check that word2 is not a prefix of word1.
          if (word1.length > word2.length && word1.startsWith(word2)) {
              return "";
          }
          
          // Find the first non match and insert the corresponding relation.
          for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
              if (word1.charAt(j) !== word2.charAt(j)) {
                  this.reverseAdjList.get(word2.charAt(j)).push(word1.charAt(j));
                  break;
              }
          }
      }
      
      // Step 2: DFS to build up the output list.
      for (let c of this.reverseAdjList.keys()) {
          let result = this.dfs(c);
          if (!result) {
              return "";
          }
      }
      
      return this.output;
  }
  
  // Return true iff no cycles detected.
  dfs(c) {
      if (this.seen.has(c)) {
          return this.seen.get(c); // If this node was grey (false), a cycle was detected.
      }
      
      this.seen.set(c, false);
      
      for (let next of this.reverseAdjList.get(c)) {
          let result = this.dfs(next);
          if (!result) {
              return false;
          }
      }
      
      this.seen.set(c, true);
      this.output += c;
      return true;
  }
}
const ans = new Solution()
const words = ["wrt","wrf","er","ett","rftt"]
console.log(ans.alienOrder(words))

// Example 1:
// Input: words = ["wrt","wrf","er","ett","rftt"]
// Output: "wertf"
// Example 2:
// Input: words = ["z","x"]
// Output: "zx"
// Example 3:
// Input: words = ["z","x","z"]
// Output: ""
// Explanation: The order is invalid, so return "".