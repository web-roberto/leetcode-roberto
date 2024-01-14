// Podemos desplazar una cadena desplazando cada una de sus letras a su letra sucesiva
// Por ejemplo, "abc" se puede cambiar para que sea "bcd".
// Podemos seguir desplazando la cadena para formar una secuencia.
// Por ejemplo, podemos seguir desplazando "abc" para formar la secuencia: "abc" -> "bcd" -> ... -> "xyz".
// Dada una matriz de cadenas cadenas, agrupe todas las cadenas [i] que pertenecen a la misma secuencia de desplazamiento. Puede devolver la respuesta en cualquier orden.
// Ejemplo 1:
// Entrada: cadenas = ["abc","bcd","acef","xyz","az","ba","a","z"]
// Salida: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]
// Ejemplo 2:
// Entrada: cadenas = ["a"]
// Salida: [["a"]]

//Dadas algunas cadenas, necesitamos agrupar las que están en la misma secuencia de cambio. Se dice que dos cadenas están en la misma secuencia de cambio si una se puede convertir en la otra cambiando cada carácter de la primera cadena a su carácter sucesivo o precedente un número fijo de veces.
// Por lo general, cuando diseñamos una función hash, lo hacemos de tal manera que todas las claves posibles se 
// asignan a un valor único. No debe haber asignaciones de muchos a uno, es decir, colisiones hash. 
//Sin embargo, en este caso, al seleccionar cuidadosamente una función hash, podemos usar las colisiones hash a nuestro favor.
// Necesitamos diseñar una función hash que asegure que los valores hash para las cadenas en la misma secuencia de cambio colisionarán y, por lo tanto, las cadenas se agruparán.

// BIG O  
// Sea N la longitud de cadenas y K la longitud máxima de una cadena en cadenas. Complejidad de tiempo: O(N∗K) Iteramos sobre todas las N cadenas y para cada cadena, iteramos sobre todos los caracteres para generar el valor Hash, que toma un tiempo O(K). En resumen, la complejidad temporal total es O(N∗K). Complejidad del espacio: O(N∗K) Necesitamos almacenar todas las cadenas más sus valores Hash en mapHashToList. En el peor escenario, cuando cada cadena en la lista dada pertenece a un valor Hash diferente, el número máximo de cadenas almacenadas en mapHashToList es 2∗N2 * N2∗N. Cada cadena ocupa como máximo un espacio O(K). Por lo tanto, la complejidad total del espacio es O(N∗K). Nota: La complejidad de tiempo y espacio para ambas soluciones es la misma porque la función getHash() tiene la misma complejidad de tiempo y espacio, O(K).

// Algorithm
// 1.Iterate over strings, and for each string:
// a. Find its Hash value, that is, the string starts with an a after some shifts. The value of shift is equal to the first character of the string. Then shift all the characters by the same value shift. Notice that we also have to do a mod of 26 on the resulting character for the circular shift.
// b. Map the original string to the above Hash value in the map mapHashToList. More specifically, add the original string to the list corresponding to its Hash value.
// 2.Iterate over the mapHashToList and store the list for every key in the map in the answer array groups

// In C++/Java expression like (a - b) % c can be negative if a < b hence we need to manually add c to make it non-negative (a - b + c) % c. 

class Solution {
  // Create a hash value
   getHash(s) {
      let chars=['']
      chars = s.split("");
      let hashKey = new String();
      
      for (let i = 1; i < chars.length; i++) {
        //charCodeAt()--- let character = 'a'.charCodeAt(0);
        //String.fromCharCode()
         // hashKey+=((char) ((chars[i] - chars[i - 1] + 26) % 26 + 'a'));
         hashKey+=(String.fromCharCode(((chars[i] - chars[i - 1] + 26) % 26 + 'a')));
      }
      
      return hashKey.toString();
   }

  groupStrings = (strings) => {
    //strings es un array de strings
    let mapHashToList = new Map();
      
      // Create a hash_value (hashKey) for each string and append the string
      // to the list of hash values i.e. mapHashToList["cd"] = ["acf", "gil", "xzc"]
      for (let str of strings ) {
          let hashKey = this.getHash(str);
          if (mapHashToList.get(hashKey) == null) {
              mapHashToList.set(hashKey, []);
          } 
        //  mapHashToList.get(hashKey).set(str);
        const arrayValues=mapHashToList.get(hashKey)
        arrayValues.push(str)
        mapHashToList.set(hashKey,arrayValues);
      }
      
      // Iterate over the map, and add the values to groups
      let groups = [];
      for (let group of mapHashToList.values()) {
          groups.push(group);
      }
      
      // Return a list of all of the grouped strings
      return groups;
  }
}

const res=new Solution();
 res.groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]) //-> Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]
