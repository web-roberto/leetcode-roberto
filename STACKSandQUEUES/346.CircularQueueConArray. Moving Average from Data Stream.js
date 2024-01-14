// JAVA DE EDITORIAL DE LEETCODE

// class MovingAverage {
//   int size, head = 0, windowSum = 0, count = 0;
//   int[] queue;
//   public MovingAverage(int size) {
//     this.size = size;
//     queue = new int[size];
//   }

//   public double next(int val) {
//     ++count;
//     // calculate the new sum by shifting the window
//     int tail = (head + 1) % size;
//     windowSum = windowSum - queue[tail] + val;
//     // move on to the next head
//     head = (head + 1) % size;
//     queue[head] = val;
//     return windowSum * 1.0 / Math.min(size, count);
//   }
// }


// https://leetcode.com/problems/moving-average-from-data-stream/solutions/3410525/javascript-moving-average-with-circular-queue/
// BUSCADO EN LEETCODE - con O(1),O(n)
/**
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.array = new Array(size)

  this.head = 0
  this.count = 0 // count of data
  this.capacity = size
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  this.array[this.head] = val
  
  if (this.count < this.capacity) this.count += 1
  this.head = (this.head + 1) % this.capacity
  
  const sum = this.array.reduce((acc, curr) => acc + curr, 0.0)
  
  return sum / this.count
};

/** 
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/


// https://leetcode.com/problems/moving-average-from-data-stream/solutions/490717/javascript-circular-queue-o-1-solution/

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.nums = Array(size).fill(0);
  [this.rear, this.S] = [-1, 0];
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  this.S += val - this.nums[++this.rear % this.nums.length];
  this.nums[this.rear % this.nums.length] = val;
  return this.S / (this.rear < this.nums.length ? this.rear + 1: this.nums.length);
};