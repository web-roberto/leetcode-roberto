function alienOrder(words) {
  // Step 0: Create data structures and find all unique letters.
  const adjList = new Map();
  const counts = new Map();
  for (const word of words) {
      for (const c of word) {
          counts.set(c, 0);
          adjList.set(c, []);
      }
  }
  // Step 1: Find all edges.
  for (let i = 0; i < words.length - 1; i++) {
      const word1 = words[i];
      const word2 = words[i + 1];
      // Check that word2 is not a prefix of word1.
      if (word1.length > word2.length && word1.startsWith(word2)) {
          return "";
      }
      // Find the first non match and insert the corresponding relation.
      for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
          if (word1.charAt(j) !== word2.charAt(j)) {
              adjList.get(word1.charAt(j)).push(word2.charAt(j));
              counts.set(word2.charAt(j), counts.get(word2.charAt(j)) + 1);
              break;
          }
      }
  }
  // Step 2: Breadth-first search.
  const sb = [];
  const queue = [];
  for (const c of counts.keys()) {
      if (counts.get(c) === 0) {
          queue.push(c);
      }
  }
  while (queue.length > 0) {
      const c = queue.shift();
      sb.push(c);
      for (const next of adjList.get(c)) {
          counts.set(next, counts.get(next) - 1);
          if (counts.get(next) === 0) {
              queue.push(next);
          }
      }
  }
  if (sb.length < counts.size) {
      return "";
  }
  return sb.join("");
}
const words = ["wrt","wrf","er","ett","rftt"]
console.log(alienOrder(words))
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