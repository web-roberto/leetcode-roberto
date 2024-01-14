class MedianFinder {
  constructor() {
      this.store = [];
  }
  
  addNum(num) {
      if (this.store.length === 0) {
          this.store.push(num);
      } else {
          const index = this.store.findIndex(element => element >= num);
          if (index === -1) {
              this.store.push(num);
          } else {
              this.store.splice(index, 0, num);
          }
      }
  }
  
  findMedian() {
      const n = this.store.length;
      return n & 1 ? this.store[Math.floor(n / 2)] : (this.store[n / 2 - 1] + this.store[n / 2]) * 0.5;
  }
}


const ans= new MedianFinder()
ans.addNum(1);    // arr = [1]
ans.addNum(2);    // arr = [1, 2]
ans.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
ans.addNum(3);    // arr[1, 2, 3]
ans.findMedian(); // return 2.0


// Example 1:
// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]
// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0