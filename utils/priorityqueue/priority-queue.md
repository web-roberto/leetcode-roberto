nvm use v20.2.0 
sudo yarn add  @datastructures-js/priority-queue

https://github.com/datastructures-js/priority-queue

https://github.com/datastructures-js   -> todas las estructuras de datos de   LEETCOD

FUNCIONES DE PRIORITY QUEUE:

MinPriorityQueue, MaxPriorityQueue -> crea y mantiene colas de prioridad. Ver los ejemplos

fromArray -> Si la cola se crea a partir de una matriz existente y no se desea utilizar un espacio O(n) adicional, esta función estática puede convertir una matriz en una cola prioritaria en el tiempo de ejecución de O(n).
enqueue (push)->agrega un valor basado en su comparación con otros valores en la cola en el tiempo de ejecución de O(log(n)).
front ->mira el valor con la prioridad más alta en la cola.
back -> mira el valor con la prioridad más baja en la cola.
dequeue (pop) -> elimina y devuelve el elemento con mayor prioridad en la cola en el tiempo de ejecución de O(log(n)).
removes and returns the element with highest priority in the queue in O(log(n)) runtime.
remove -> elimina todos los elementos que cumplen un criterio en el tiempo de ejecución de O(n*log(n)) y devuelve una lista de los elementos eliminados.
isEmpty -> comprueba si la cola está vacía
size -> devuelve el número de elementos en la cola.
toArray->d evuelve una matriz ordenada de elementos por sus prioridades de mayor a menor en el tiempo de ejecución de O(n*log(n)).
Symbol.iterator-> Las colas implementan un Symbol.iterator que las hace iterables en pop.
clear -> borra todos los elementos de la colaborra todos los elementos de la cola

de Java a JS: poll(java) is dequeue(JS) and  offer(java) is enqueue(JS)