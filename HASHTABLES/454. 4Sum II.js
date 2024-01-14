//Dadas cuatro matrices de enteros nums1, nums2, nums3 y nums4, todas de longitud n, devuelva el número de tuplas (i, j, k, l) 
// tales que: 0 <= i, j, k, l < n nums1[i] nums2[j] nums3[k] nums4[l] == 0   
//Ejemplo 1: Entrada: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [ 0,2] 
//Salida: 2 Explicación: Las dos tuplas son: 1. (0, 0, 0, 1) -> nums1[0] nums2[0] nums3[0] nums4[1] = 1 (-2) ( -1) 2 = 0 2. (1, 1, 0, 0) -> nums1[1] nums2[1] nums3[0] nums4[0] = 2 (-1) (-1) 0 = 0 
//Ejemplo 2 : Entrada: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0] Salida: 1

// Este problema es una variación de 4Sum, y recomendamos revisar ese problema primero. La principal diferencia es que aquí
//elegimos cada elemento de una matriz diferente, mientras que en 4Sum todos los elementos provienen de la misma matriz.
// Por esa razón, no podemos usar el enfoque de dos punteros, donde los elementos deben estar en la misma matriz ordenada.
// En el lado positivo, no necesitamos preocuparnos por usar el mismo elemento dos veces: elegimos un elemento a la vez de cada matriz.
// Como verá más adelante, esto ayuda a reducir la complejidad del tiempo.
// Finalmente, no necesitamos devolver valores reales y asegurarnos de que sean únicos; 
//simplemente contamos cada combinación de cuatro elementos que suma cero.

// Una solución de fuerza bruta será enumerar todas las combinaciones de elementos usando cuatro bucles anidados, lo que da como 
// resultado una complejidad de tiempo O(n^4). Un enfoque más rápido es usar tres bucles anidados y, 
// para cada suma a b c, buscar un valor complementario d == -(a b c) en la cuarta matriz. Podemos hacer la búsqueda en 
// O(1) si completamos la cuarta matriz en un hashmap. Tenga en cuenta que necesitamos rastrear la frecuencia 
// de cada elemento en la cuarta matriz. Si un elemento se repite varias veces, formará múltiples cuádruples. 
// Por lo tanto, usaremos valores hashmap para almacenar recuentos. Sobre la base de esta idea, podemos observar que a b == -(c d). 
// Primero, contaremos las sumas de los elementos a b de las dos primeras matrices usando un hashmap.
//  Luego, enumeraremos los elementos de la tercera y cuarta matriz y buscaremos una suma complementaria a b == -(c d) en el hashmap.


//1. Para cada a en A.
//   Para cada b en B.
//     Si a + b existe en el hashmap m, incremente el valor.
//     De lo contrario, agregue una nueva clave a + b con el valor 1.
// 2. Para cada c en C.
//     Para cada d en D.
//       Clave de búsqueda -(c + d) en el hashmap m.
//       Agregue su valor al conteo cnt.
// 3.Devuelve el conteo cnt.


// Time Complexity: O(n^2). We have 2 nested loops to count sums, and another 2 nested loops to find complements.
// Space Complexity: O(n^2)for the hashmap. There could be up to O(n^2) distinct a + b keys.

// Ver el video de: https://leetcode.com/problems/4sum-ii/editorial/



  function fourSumCount(A, B, C, D) {
      let cnt = 0;
      m = new Map();
      for (let a of A) {
          for (let b of B) {
            debugger
              if (m.get(a + b)>=1) m.set(a + b, m.get(a + b) + 1);
              else m.set(a + b,1);
             
          }
      }
      for (let c of C) {
          for (let d of D) {
              debugger
              cnt += m.get(-(c + d));
          }
      }
      return cnt;
  }
  console.log(fourSumCount ([1,2],[1,2],[-1,-2],[-1,-2]))
 