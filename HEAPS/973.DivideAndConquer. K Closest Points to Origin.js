class Solution {
  constructor() {
      this.points = [];
  }
  
  kClosest(points, K) {
      this.points = points;
      this.sort(0, points.length - 1, K);
      return this.points.slice(0, K);
  }
  
  sort(i, j, K) {
      if (i >= j) return;
      let k = Math.floor(Math.random() * (j - i + 1)) + i;
      this.swap(i, k);
      let mid = this.partition(i, j);
      let leftLength = mid - i + 1;
      if (K < leftLength)
          this.sort(i, mid - 1, K);
      else if (K > leftLength)
          this.sort(mid + 1, j, K - leftLength);
  }
  
  partition(i, j) {
      let oi = i;
      let pivot = this.dist(i);
      i++;
      while (true) {
          while (i < j && this.dist(i) < pivot)
              i++;
          while (i <= j && this.dist(j) > pivot)
              j--;
          if (i >= j) break;
          this.swap(i, j);
      }
      this.swap(oi, j);
      return j;
  }
  
  dist(i) {
      return this.points[i][0] * this.points[i][0] + this.points[i][1] * this.points[i][1];
  }
  
  swap(i, j) {
      let t0 = this.points[i][0], t1 = this.points[i][1];
      this.points[i][0] = this.points[j][0];
      this.points[i][1] = this.points[j][1];
      this.points[j][0] = t0;
      this.points[j][1] = t1;
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