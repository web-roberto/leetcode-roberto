CREA AUTOMÁTICAMENTE UN HEAP en JS al usar una app de Java que lo usa y 'convertirlo'
https://www.codeconvert.ai/app




sudo yarn add @datastructures-js/heap
const { Heap, MinHeap, MaxHeap } = require('@datastructures-js/heap');
import {
  Heap,
  MinHeap,
  MaxHeap,
  ICompare,
  IGetCompareValue,
} from '@datastructures-js/heap';


A) constructor Heap: -> función comparadora
const compareCars = (a, b) => {
  if (a.year > b.year) {
    return -1;
  }
  if (a.year < b.year) {
    // prioratize newest cars
    return 1;
  }
  // with least price
  return a.price < b.price ? -1 : 1;
};
const carsHeap = new Heap(compareCars)

B) constructor MinHeap, MaxHeap
El constructor no necesita función comparador para nºs. si es un objeto uso un callback
B-1) nºs -> const numbersHeap = new MinHeap();
B-2) object witn MinHeap or MaxHeap -> const bidsHeap = new MaxHeap((bid) => bid.value);

C) insert (push) -> inserta un valor en una posición correcta en el montón en el tiempo de ejecución de O(log(n)).
C-1) nºs -> push
const numbers = [3, -2, 5, 0, -1, -5, 4];
numbers.forEach((num) => numbersHeap.push(num));
C-2) object -> insert
const cars = [
  { year: 2013, price: 35000 },
  { year: 2010, price: 2000 },
  { year: 2013, price: 30000 },
  { year: 2017, price: 50000 },
  { year: 2013, price: 25000 },
  { year: 2015, price: 40000 },
  { year: 2022, price: 70000 }
];
cars.forEach((car) => carsHeap.insert(car));

D) extractRoot (pop) -> elimina y devuelve el valor raíz (superior) del montón en el tiempo de ejecución de O(log(n)).
D-1) nºs -> pop
while (!numbersHeap.isEmpty()) {
  console.log(numbersHeap.pop());}
D-2) object -> extractRoot
while (!carsHeap.isEmpty()) {
  console.log(carsHeap.extractRoot());}

E)root (top) -> devuelve el nodo raíz sin eliminarlo.
E-1) nºs: console.log(numbersHeap.top()); // -5
E-2) objeto: console.log(carsHeap.root()); // { year: 2022, price: 70000 }

F) leaf -> devuelve un nodo hoja en el montón.
console.log(carsHeap.leaf()); // { year: 2010, price: 2000 }
console.log(numbersHeap.leaft()); // 5

G) size -> devuelve el número de nodos en el montón.
console.log(carsHeap.size()); // 7
console.log(numbersHeap.size()); // 7

H) sort -> devuelve una lista de valores ordenados en el tiempo de ejecución de O(n*log(n)), según la lógica de comparación y en orden inverso. En MaxHeap devuelve la lista de valores ordenados en orden ascendente y en orden descendente en MinHeap. sort muta las posiciones de los nodos en el montón, para evitar eso, puede ordenar un clon del montón.(pq modifica el original)

// after sorting the heaps directly, node positions are mutated
console.log(carsHeap.sort());
console.log(numbersHeap.sort());

I) isValid ->comprueba si el montón es válido (todos los nodos están colocados correctamente) en el tiempo de ejecución de log(n).
// after sorting the heaps directly, node positions are mutated
console.log(carsHeap.isValid()); // false
console.log(numbersHeap.isValid()); // false

J) fix -> arregla el montón haciendo los intercambios necesarios entre nodos en el tiempo de ejecución de O(n).
console.log(carsHeap.fix().isValid()); // true
console.log(numbersHeap.fix().isValid()); // true

K) clone -> crea una copia superficial del montón.
console.log(carsHeap.clone().sort());   //1º crea un clon y después ordena el clon y no modifica el orignal
console.log(numbersHeap.clone().sort());

L) clear -> borra el montón.
carsHeap.clear();
numbersHeap.clear();

M) heapify -> convierte una lista de valores en un montón sin usar un espacio adicional en el tiempo de ejecución de O(n).

M-1) nºs
const heapifiedNumbers = MinHeap.heapify(numbers);
console.log(heapifiedNumbers.isValid()); // true
console.log(heapifiedNumbers.leaf()); // 5
console.log(numbers);
// [-5, -1, -2, 3, 0, 5, 4]

M-2) objects con Heap
const heapifiedCars = Heap.heapify(cars, compareCars);
console.log(heapifiedCars.isValid()); // true
console.log(heapifiedCars.leaf()); // { year: 2010, price: 2000 }
// original list is heapified
console.log(cars);

M-3) objects con MinHeap o MaxHeap
const heapifiedBids = MaxHeap.heapify(bids, (bid) => bid.value);

O) isHeapified -> Comprueba si una lista dada está heapificada
console.log(Heap.isHeapified(cars, compareCars)); // true
console.log(MinHeap.isHeapified(numbers)); // true
console.log(MaxHeap.isHeapified(bids, (bid) => bid.value)); // true

P) Symbol.iterator -> Los montones implementan un Symbol.iterator que los hace iterables en pop.
console.log([...carsHeap]); // desestructura el montón a base de sucesivos pops y se queda vacío
console.log(carsHeap.size()); // 0

console.log([...numbersHeap]); // [5, -5, -2, -1, 0, 3, 4]
console.log(numbersHeap.size()); // 0

for (const bid of bidsHeap) {
  console.log(bid);}
console.log(bidsHeap.size()); // 0

Q)toArray -> Convierte el montón en una matriz clonada sin ordenar.
console.log(carsHeap.toArray());
console.log(numbersHeap.toArray()); // [5, -5, -2, -1, 0, 3, 4]
console.log(bidsHeap.toArray());

R)









