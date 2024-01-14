// USES A LIST OF NODES TO IMPLEMENT ITV-> 'pq' no está ordenado y 'numbers' si
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');


const numbersQueue = new MinPriorityQueue();
const bidsQueue = new MaxPriorityQueue((bid) => bid.value);

const numbers = [3, -2, 5, 0, -1, -5, 4];

const pq = PriorityQueue.fromArray(numbers, (a, b) => a - b);

console.log('atfer converting array into queue, the array is modified:',numbers); // [-5, -1, -2, 3, 0, 5, 4]   -> modificar el array 'numbers'
console.log('the priority queue is:',pq)
console.log(pq.dequeue())// -5  -> reordena la cola en prioridades 
console.log('numbers array is now:',numbers); // [ 0, 3, 4, 5 ]
console.log('the priority queue is:',pq)

console.log(pq.dequeue()) // -2
console.log('numbers array is now:',numbers); // [ 0, 3, 4, 5 ]
console.log('the priority queue is:',pq)

console.log(pq.dequeue()) // -1
console.log('numbers array is now:',numbers); // [ 0, 3, 4, 5 ]
console.log(pq.dequeue()) // 0
console.log('numbers array is now:',numbers); // [ 0, 3, 4, 5 ]
console.log(pq.dequeue()) // 3
console.log('numbers array is now:',numbers); // [ 0, 3, 4, 5 ]
console.log(pq.dequeue()) // 4
console.log('numbers array is now:',numbers); // [ 0, 3, 4, 5 ]