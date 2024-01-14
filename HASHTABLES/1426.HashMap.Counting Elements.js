//Dada un array de enteros arr, cuente cuántos elementos x hay, de modo que x+1 también 
//esté en arr. Si hay duplicados en arr, cuéntelos por separado. 
//Ejemplo 1: Entrada: arr = [1,2,3] Salida: 2 Explicación: 1 y 2 se cuentan porque 2 y 3 están en arr. 
//Ejemplo 2: Entrada: arr = [1,1,3,3,5,5,7,7] Salida: 0 Explicación: No se cuentan números porque no hay 2, 4, 6 u 8 en arr.


// Sea N la longitud del arreglo de entrada, arr. Complejidad temporal : O(N). La creación de un HashSet a partir de N enteros requiere O(N) tiempo. Luego, debemos recorrer cada uno de los N enteros como antes, excepto que esta vez verificamos x+1 al ver si está en el HashSet; una operación O(1). Esto nos da una complejidad temporal total de O(N)+N*O(1)=O(N)+O(N)=O(N)
// Complejidad espacial : O(N). El HashSet necesita almacenar cada entero único de arr. En el peor de los casos, todos los enteros en arr serán únicos, lo que significa que HashSet tiene una complejidad espacial de O(N).
// Es interesante notar que O(N) es un límite superior en la complejidad del espacio. Si U es el número de enteros únicos en arr, entonces la complejidad del espacio podría representarse con mayor precisión como O(U).

public int countElements(int[] arr) {
  Set<Integer> hashSet = new HashSet<>();
  for (int x : arr) {
      hashSet.add(x);
  }
  int count = 0;
  for (int x : arr) {
      if (hashSet.contains(x + 1)) {
          count++;
      }
  }
  return count;
}