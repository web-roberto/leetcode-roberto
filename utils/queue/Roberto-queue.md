front(dequeue/pop,front) <- QUEUE <-back(enqueue/push,back)
https://github.com/datastructures-js/queue
yarn add @datastructures-js/queue

IMPORT
const { Queue } = require('@datastructures-js/queue');
import { Queue } from '@datastructures-js/queue';

CONSTRUCTOR
// empty queue
const queue = new Queue();
// from an array
const queue = new Queue([1, 2, 3]);

QUEUE.FROMARRAY
// empty queue
const queue = Queue.fromArray([]);
// with elements
const list = [10, 3, 8, 40, 1];
const queue = Queue.fromArray(list);
// If the list should not be mutated, use a copy of it.
const queue = Queue.fromArray(list.slice());

ENQUEUE (PUSH)
queue.enqueue(10).enqueue(20); // or queue.push(123)

FRONT -> peek on the FRONT element of the queue
console.log(queue.front()); // 10

BACK-> peek on the BACK element of the queue
console.log(queue.back()); // 20

DEQUEUE (POP) -> removes and returns the FRONT element of the queue in O(1) runtime.
Dequeuing all elements takes O(n) instead of O(n2) when using shift/unshift with arrays.
console.log(queue.dequeue()); // 10 // or queue.pop()
console.log(queue.front()); // 20

ISEMPTY -> checks if the queue is empty.
console.log(queue.isEmpty()); // false

SIZE -> returns the number of elements in the queue.
console.log(queue.size()); // 1

CLONE -> creates a shallow(superficial) copy of the queue.
const queue = Queue.fromArray([{ id: 2 }, { id: 4 } , { id: 8 }]);
const clone =  queue.clone();
clone.dequeue();
console.log(queue.front()); // { id: 2 }
console.log(clone.front()); // { id: 4 }

TOARRAY -> returns a copy of the remaining elements as an array.
queue.enqueue(4).enqueue(2);
console.log(queue.toArray()); // [20, 4, 2]

CLEAR ->clears all elements from the queue.
queue.clear();
queue.size(); // 0


BUILD -> grunt build

