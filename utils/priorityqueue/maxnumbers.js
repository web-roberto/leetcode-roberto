// USES A LIST OF NODES TO IMPLEMENT ITV-> 'pq' no está ordenado y 'numbers' si
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');


const numbers = [3, -2, 5, 0, -1, -5, 4];

const mpq = MaxPriorityQueue.fromArray(numbers);
//the fist item to extract in 'dequeue' is the Max of the Queue 

console.log(numbers); // [-5, -1, -2, 3, 0, 5, 4]
mpq.dequeue(); // 5
console.log('numbers array is now:',numbers); 
mpq.dequeue(); // 4
console.log('numbers array is now:',numbers); 
mpq.dequeue(); // 3
console.log('numbers array is now:',numbers);  // [ 0, -1, -5, -2 ]
mpq.clear()
const numbers2 = [3, -2, 5, 0, -1, -5, 4];
numbers2.forEach((num) => mpq.push(num)); // push is an alias for enqueue
console.log(mpq.front()); // -5  -> peek the higuest priority
console.log(mpq.back()); // 5 --> peek the lowest priority

console.log(mpq.dequeue()); // -5
console.log('numbers array is now:',numbers2); 
console.log(mpq.dequeue()); // -2
console.log('numbers array is now:',numbers2); 
console.log(mpq.dequeue()); // -1
console.log('numbers array is now:',numbers2); 

console.log(mpq.isEmpty()); // false
mpq.remove((n) => n === 4); // [4]
console.log(mpq.size()); // 3

console.log('Array ordenado de alto a baja prioridad:',mpq.toArray()); // [ 0, 3, 5 ]

console.log([...mpq]); // [ 0, 3, 5 ] -> los desestructura borrandolos del array
console.log(mpq.size()); // 0

mpq.clear();
console.log(mpq.size()); // 0
console.log(mpq.front()); // null
console.log(mpq.dequeue()); // null
console.log(mpq.isEmpty()); // true
