// Sort: Ordene los puntos por distancia, luego tome los puntos K más cercanos.
class Solution {
  kClosest(points, K) {
      let N = points.length;
      let dists = new Array(N);
      for (let i = 0; i < N; ++i)
          dists[i] = this.dist(points[i]);
      dists.sort((a, b) => a - b);
      let distK = dists[K-1];
      let ans = new Array(K);
      let t = 0;
      for (let i = 0; i < N; ++i)
          if (this.dist(points[i]) <= distK)
              ans[t++] = points[i];
      return ans;
  }
  dist(point) {
      return point[0] * point[0] + point[1] * point[1];
  }
}
const ans = new Solution()
const points = [[1,3],[-2,2]]
const k = 1

console.log(ans.kClosest(points,k))

// Example 1:
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.