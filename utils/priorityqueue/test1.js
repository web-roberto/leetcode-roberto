const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');



const numbers = [3, -2, 5, 0, -1, -5, 4];

const pq = PriorityQueue.fromArray(numbers, (a, b) => a - b);

console.log(numbers); // [-5, -1, -2, 3, 0, 5, 4]
pq.dequeue(); // -5
pq.dequeue(); // -2
pq.dequeue(); // -1
console.log(numbers); // [ 0, 3, 4, 5 ]