
function ladderLength(beginWord, endWord, wordList) {
  const L = beginWord.length;
  
  const allComboDict = new Map();
  wordList.forEach(word => {
      for (let i = 0; i < L; i++) {
          const newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);
          const transformations = allComboDict.get(newWord) || [];
          transformations.push(word);
          allComboDict.set(newWord, transformations);
      }
  });
  
  const Q = [];
  Q.push([beginWord, 1]);
  
  const visited = new Map();
  visited.set(beginWord, true);
  while (Q.length > 0) {
      const [word, level] = Q.shift();
      for (let i = 0; i < L; i++) {
          const newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);
          for (const adjacentWord of allComboDict.get(newWord) || []) {
              if (adjacentWord === endWord) {
                  return level + 1;
              }
              if (!visited.has(adjacentWord)) {
                  visited.set(adjacentWord, true);
                  Q.push([adjacentWord, level + 1]);
              }
          }
      }
  }
  return 0;
}

const beginWord = "hit"
const endWord = "cog"
const wordList = ["hot","dot","dog","lot","log","cog"]

console.log(ladderLength(beginWord, endWord, wordList))

// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.