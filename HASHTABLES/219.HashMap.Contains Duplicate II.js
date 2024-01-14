//Dada una matriz de enteros nums y un entero k, devuelve verdadero si hay dos índices 
//distintos i y j en la matriz tales que nums[i] == nums[j] y abs(i - j) <= k. 
//Ejemplo 1: Entrada: nums = [1,2,3,1], k = 3 Salida: verdadero 
//Ejemplo 2: Entrada: nums = [1,0,1,1], k = 1 Salida: verdadero 
//Ejemplo 3: Entrada : nums = [1,2,3,1,2,3], k = 2 Salida: falso

// necesitamos una estructura de datos que admita operaciones de búsqueda, eliminación e inserción
// en tiempo constante. Hash Table es la respuesta. 
// Recorra la matriz, para cada elemento, 
//    busque el elemento actual en HashTable, devuelva verdadero si lo encuentra. 
//    Coloque el elemento actual en HashTable. 
//  Si el tamaño de HashTable es mayor que k, elimine el elemento más antiguo. 
//return false 

// Complejidad temporal : O(n). Realizamos nnn operaciones de búsqueda, eliminación e inserción, 
// cada una con una complejidad de tiempo constante. Complejidad espacial : O(min(n,k)). 
//El espacio adicional requerido depende de la cantidad de elementos almacenados en la tabla hash, 
//que es el tamaño de la ventana deslizante, min(n,k).

let fn = (nums, k) => {
  set = new Set();
  for (let i = 0; i < nums.length; ++i) {
      if (set.has(nums[i])) return true;
      set.add(nums[i]);
      if (set.size > k) {
          set.delete(nums[i - k]);
      }
  }
  return false;
}
//console.log(fn(nums=[1,2,3,1],k=3)) //-> true
console.log(fn(nums=[1,2,3,1,2,3],k=2)) //-> false
