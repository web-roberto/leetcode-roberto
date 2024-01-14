// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "leetcode"
// Output: 0
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1
//La idea es recorrer la cadena y guardar en un mapa hash el número de veces que aparece 
// cada carácter en la cadena. Eso tomaría el tiempo O(N), donde N es un número de caracteres
// en la cadena. Y luego repasamos la cadena por segunda vez, esta vez usamos el mapa hash 
//como referencia para verificar si un carácter es único o no. Si el carácter es único, 
//uno podría simplemente devolver su índice. La complejidad de la segunda iteración también O(N).


// Time complexity : O(N)\mathcal{O}(N)O(N) since we go
// through the string of length N two times.
// Space complexity : O(1)\mathcal{O}(1)O(1) because English alphabet contains
// 26 letters.

let fn = s => {
       let count = new Map();
       const n = s.length;
      // build hash map : character and how often it appears
      const begin='a'.charCodeAt(0);
      for (let i = begin; i < (begin+26); i++) count.set(i,0);//26 letters in english
      for (let i = 0; i < n; i++) {
          const c = s.charAt(i).charCodeAt(0);
          console.log('----c es:',c)
          console.log('----count.get(c) es:',count.get(c))

          count.set(c, count.get(c) + 1);
      }
      
      // find the index
      for (let i = 0; i < n; i++) {
          if (count.get(s.charAt(i).charCodeAt(0)) == 1) 
              return i;
      }
      return -1;
  }
console.log(fn("loveleetcode")) //-> 2
