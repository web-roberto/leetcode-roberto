/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
let openLock = function(deadends, target) {
  let neighbors = node => {
      let ans = [];
      for (let i = 0; i < 4; i++) {
          let num = node[i];
          for (const change of [-1, 1]) {
              let x = (+num + change + 10) % 10
              ans.push(node.slice(0, i) + x + node.slice(i + 1));
          }
      }
      
      return ans;
  }
  
  if (deadends.includes("0000")) {
      return -1;
  }
  
  let queue = ["0000"];
  let seen = new Set(deadends);
  seen.add("0000");
  
  let steps = 0;
  
  while (queue.length) {
      let currentLength = queue.length;
      let nextQueue = [];
      
      for (let i = 0; i < currentLength; i++) {
          const node = queue[i];
          if (node == target) {
              return steps;
          }

          for (const neighbor of neighbors(node)) {
              if (!seen.has(neighbor)) {
                  seen.add(neighbor);
                  nextQueue.push(neighbor);
              }
          }
      }
      
      steps++;
      queue = nextQueue;
  }
  
  return -1;
};
console.log(openLock(["6666","9999","6969"],"5432"))

// Example 1:
// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
// Explanation: 
// A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
// Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
// because the wheels of the lock become stuck after the display becomes the dead end "0102".

// Example 2:
// Input: deadends = ["8888"], target = "0009"
// Output: 1
// Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".

// Example 3:
// Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// Output: -1
// Explanation: We cannot reach the target without getting stuck.