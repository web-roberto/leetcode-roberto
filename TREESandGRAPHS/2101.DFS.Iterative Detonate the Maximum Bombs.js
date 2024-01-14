class Solution {
    maximumDetonation(bombs) {
        let graph = new Map();
        let n = bombs.length;
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === j) {
                    continue;
                }
                let xi = bombs[i][0], yi = bombs[i][1], ri = bombs[i][2];
                let xj = bombs[j][0], yj = bombs[j][1];
                //solo mete en la lista de adjacencias las bombas dentro del radio de explosión
              //entre el nodo actual y el nodo siguiente
                if (ri * ri >= (xi - xj) * (xi - xj) + (yi - yj) * (yi - yj)) {
                    if (!graph.has(i)) {
                        graph.set(i, []);
                    }
                    graph.get(i).push(j);
                }
            }
        }
        let answer = 0;
        for (let i = 0; i < n; i++) {
            answer = Math.max(answer, this.dfs(i, graph));
        }
        return answer;
    }
    dfs(i, graph) {
        let stack = [];
        let visited = new Set();
        stack.push(i);
        visited.add(i);
        while (stack.length > 0) {
            let cur = stack.pop();
            for (let neib of graph.get(cur) || []) {
                if (!visited.has(neib)) {
                    visited.add(neib);
                    stack.push(neib);
                }
            }
        }
        return visited.size;
    }
}

const ans=new Solution()
const bombs = [[2,1,3],[6,1,4]]
console.log(ans.maximumDetonation(bombs))


// Example 1:
// Input: bombs = [[2,1,3],[6,1,4]]
// Output: 2
// Explanation:
// The above figure shows the positions and ranges of the 2 bombs.
// If we detonate the left bomb, the right bomb will not be affected.
// But if we detonate the right bomb, both bombs will be detonated.
// So the maximum bombs that can be detonated is max(1, 2) = 2.

// Example 2:
// Input: bombs = [[1,1,5],[10,10,5]]
// Output: 1
// Explanation:
// Detonating either bomb will not detonate the other bomb, so the maximum number of bombs that can be detonated is 1.

// Example 3:
// Input: bombs = [[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]
// Output: 5
// Explanation:
// The best bomb to detonate is bomb 0 because:
// - Bomb 0 detonates bombs 1 and 2. The red circle denotes the range of bomb 0.
// - Bomb 2 detonates bomb 3. The blue circle denotes the range of bomb 2.
// - Bomb 3 detonates bomb 4. The green circle denotes the range of bomb 3.
// Thus all 5 bombs are detonated.