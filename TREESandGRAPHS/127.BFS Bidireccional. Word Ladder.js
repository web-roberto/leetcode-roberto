class Solution {
  constructor() {
      this.L = 0;
      this.allComboDict = new Map();
  }
  
  visitWordNode(Q, visited, othersVisited) {
      while (Q.length > 0) {
          const node = Q.shift();
          const word = node[0];
          const level = node[1];
          for (let i = 0; i < this.L; i++) {
              const newWord = word.substring(0, i) + '*' + word.substring(i + 1, this.L);
              const adjacentWords = this.allComboDict.get(newWord) || [];
              for (const adjacentWord of adjacentWords) {
                  if (othersVisited.has(adjacentWord)) {
                      return level + othersVisited.get(adjacentWord);
                  }
                  if (!visited.has(adjacentWord)) {
                      visited.set(adjacentWord, level + 1);
                      Q.push([adjacentWord, level + 1]);
                  }
              }
          }
      }
      return -1;
  }
  
  ladderLength(beginWord, endWord, wordList) {
      if (!wordList.includes(endWord)) {
          return 0;
      }
      
      this.L = beginWord.length;
      wordList.forEach(word => {
          for (let i = 0; i < this.L; i++) {
              const newWord = word.substring(0, i) + '*' + word.substring(i + 1, this.L);
              const transformations = this.allComboDict.get(newWord) || [];
              transformations.push(word);
              this.allComboDict.set(newWord, transformations);
          }
      });
      
      const Q_begin = [];
      const Q_end = [];
      Q_begin.push([beginWord, 1]);
      Q_end.push([endWord, 1]);
      
      const visitedBegin = new Map();
      const visitedEnd = new Map();
      visitedBegin.set(beginWord, 1);
      visitedEnd.set(endWord, 1);
      let ans = -1;
      while (Q_begin.length > 0 && Q_end.length > 0) {
          if (Q_begin.length <= Q_end.length) {
              ans = this.visitWordNode(Q_begin, visitedBegin, visitedEnd);
          } else {
              ans = this.visitWordNode(Q_end, visitedEnd, visitedBegin);
          }
          if (ans > -1) {
              return ans;
          }
      }
      return 0;
  }
}
const ans=new Solution()
const beginWord = "hit"
const endWord = "cog"
const wordList = ["hot","dot","dog","lot","log","cog"]

console.log(ans.ladderLength(beginWord, endWord, wordList))

// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.