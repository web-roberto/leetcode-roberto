//Diseñe una estructura de datos que acepte un flujo de enteros y verifique si tiene un par de enteros que suman un valor particular. 
//Implemente la clase TwoSum: TwoSum() Inicializa el objeto TwoSum, inicialmente con una matriz vacía. void add(int number) 
//Agrega un número a la estructura de datos. boolean find(int value) Devuelve verdadero si existe algún par de números cuya suma sea igual 
//a valor, de lo contrario, devuelve falso. Ejemplo 1: Entrada ["TwoSum", "add", "add", "add", "find", "find"] [[], [1], [3], [5], [4], [ 7]] Salida [nulo, nulo, nulo, nulo, verdadero, falso] Explicación TwoSum twoSum = new TwoSum(); dosSuma.add(1);

//Intuición 
//Como una solución alternativa al problema original de Two Sum, uno podría emplear HashTable para indexar cada número. Dado un valor de suma deseado S, para cada número a, solo necesitamos verificar si existe un número complementario (S-a) en la tabla. Como sabemos, la estructura de datos de la tabla hash podría ofrecernos una búsqueda rápida y operaciones de inserción, lo que se ajusta bien a los requisitos anteriores.

// Algoritmo
// Primero, inicializamos un contenedor de tabla hash en nuestra estructura de datos.
// Para la función add(number), construimos una tabla hash de frecuencia con el número como clave y la frecuencia del número como valor en la tabla.
// Para la función de búsqueda (valor), iteramos a través de la tabla hash sobre las claves. Para cada clave (número), comprobamos si existe un complemento (valor - número) en la tabla. Si es así, podríamos terminar el bucle y devolver el resultado.
// En un caso particular, donde el número y su complemento son iguales, debemos verificar si existen al menos dos copias del número en la tabla.
// Ilustramos el algoritmo en la siguiente figura:

//For the add(number) function: O(1)\mathcal{O}(1)O(1), since it takes a constant time to update an entry in hashtable.
//For the find(value) function: O(N)\mathcal{O}(N)O(N), where NNN is the total number of unique numbers. In the worst case, we would iterate through the entire table.

let num_counts = new Map();
  /** Add the number to an internal data structure.. */
  function add( number) {
    if (num_counts.has(number))
      num_counts.set(number, num_counts.get(number) + 1);
    else
      num_counts.set(number, 1);
  }

  /** Find if there exists any pair of numbers which sum is equal to the value. */
  function find(value) {
    debugger;
    const iterator1 = num_counts.entries();
    for (let entry of iterator1) {
      let complement = value - entry[0];
      if (complement != entry[0]) {
        if (num_counts.has(complement))
          return true;
      } else {
        if (entry[1] > 1)
          return true;
      }
    }
    return false;
  }

 // TwoSum twoSum = new TwoSum();
add(1);   // [] --> [1]
add(3);   // [1] --> [1,3]
add(5);   // [1,3] --> [1,3,5]
console.log('--find(4)-',find(4))// 1 + 3 = 4, return true
console.log('--find(7)-',find(7))// No two integers sum up to 7, return false
