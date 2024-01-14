
// BFS con su cola. Saca de su cola el nodo actual y mete a sus vecinos (el gen con una mutación solo)
// set de visitados
class Solution {
  minMutation(start, end, bank) {
      let queue = [];
      let seen = new Set();
      queue.push(start);
      seen.add(start);
      let steps = 0;
      while (queue.length > 0) {
          let nodesInQueue = queue.length;
          for (let j = 0; j < nodesInQueue; j++) {
              let node = queue.shift();
              if (node === end) {
                  return steps;
              }
              for (let c of ['A', 'C', 'G', 'T']) {
                  for (let i = 0; i < node.length; i++) {
                      let neighbor = node.substring(0, i) + c + node.substring(i + 1);
                      if (!seen.has(neighbor) && bank.includes(neighbor)) {
                          queue.push(neighbor);
                          seen.add(neighbor);
                      }
                  }
              }
          }
          steps++;
      }
      return -1;
  }
}

const ans=new Solution()
const startGene = "AACCGGTT"
const endGene = "AACCGGTA"
const bank = ["AACCGGTA"]
console.log(ans.minMutation(startGene, endGene, bank))

// Example 1:
// Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
// Output: 1
// Example 2:
// Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
// Output: 2