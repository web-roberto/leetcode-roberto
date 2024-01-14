//ENUNCIADO
//Dadas dos cadenas s y t, determina si son isomorfas. Dos cadenas s y t son isomorfas si los
// caracteres en s se pueden reemplazar para obtener t. Todas las apariciones de un carácter 
//deben reemplazarse con otro carácter conservando el orden de los caracteres.
// No se pueden asignar dos caracteres al mismo carácter, pero un carácter se puede asignar a sí mismo.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Algoritmo:
// 1- Definimos un diccionario mapping_s_t que se usará para mapear caracteres en la cadena s a caracteres en la cadena t y otro diccionario mapping_t_s que se usará para mapear caracteres en la cadena t a caracteres en la cadena s.
// 2- A continuación, iteramos sobre las dos cadenas un carácter a la vez
// 3- Supongamos que el carácter de la primera cadena es c1 y el carácter correspondiente de la segunda cadena es c2.
//    a) Si c1 no tiene una asignación en mapping_s_t y c2 no tiene una asignación en mapping_t_s, agregamos las asignaciones correspondientes en ambos diccionarios y pasamos al siguiente carácter.
//    b) En este punto, esperamos que las asignaciones de caracteres existan en los diccionarios y que sus valores sean mapeo_s_t[c1] = c2 y mapeo_t_s[c2] = c1. Si alguna de estas condiciones falla (c1 no está en el diccionario, c2 no está en el diccionario, asignación inesperada), devolvemos falso.
// 4- Devuelve verdadero una vez que se hayan agotado ambas cadenas.

// Complejidad temporal: O(N). Procesamos cada carácter en ambas cadenas exactamente una vez para determinar si las cadenas son isomorfas. 
// Complejidad espacial: O(1) ya que el tamaño del conjunto de caracteres ASCII es fijo y las claves de nuestro diccionario son todos caracteres ASCII válidos según el enunciado del problema.


let fn = (s,t) => {
      mappingDictStoT = new Array(256);
      for (let i = 0; i <255; ++i) {mappingDictStoT[i]=-1}
      
      mappingDictTtoS = new Array(256);
      for (let i = 0; i <255; ++i) {mappingDictTtoS[i]=-1}
      //Arrays.fill(mappingDictTtoS, -1);
      console.log('----mappingDictStoT---,',mappingDictStoT)

      for (let i = 0; i < s.length; ++i) {
          const c1 = s.charAt(i).charCodeAt(0);
          const c2 = t.charAt(i).charCodeAt(0);
          console.log('c1 es:',c1)
          console.log('c2 es:',c2)

          console.log('----mappingDictStoT[c1]---,',mappingDictStoT[c1])
          console.log('----mappingDictTtoS[c2]---,',mappingDictTtoS[c2])

          // Case 1: No mapping exists in either of the dictionaries
          if (mappingDictStoT[c1] == -1 && mappingDictTtoS[c2] == -1) {
              mappingDictStoT[c1] = c2;
              mappingDictTtoS[c2] = c1;
          }
          // Case 2: Ether mapping doesn't exist in one of the dictionaries or Mapping exists and
          // it doesn't match in either of the dictionaries or both 
          else if (!(mappingDictStoT[c1] == c2 && mappingDictTtoS[c2] == c1)) {
              return false;
          }
      }
      return true;
    }
    // tests 1) s = "egg", t = "add"  -> true 2) s = "paper", t = "title"  -> true  3)s = "foo", t = "bar" -> false  console.log(fn())
  console.log(fn(s = "foo", t = "bar"))
