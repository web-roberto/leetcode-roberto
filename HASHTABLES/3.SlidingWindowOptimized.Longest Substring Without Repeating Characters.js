//Dada una cadena s, encuentre la longitud de la subcadena más larga sin repetir caracteres.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//Intuición 
//Lo mismo que antes pero left=right en lugar de avanzar el left hasta que no haya duplicados en la ventana. 
//Algoritmo 
//La razón es que si s[j] tiene un duplicado en el rango [i,j) con índice j ′ , 
//no No es necesario aumentar i poco a poco. Podemos omitir todos los elementos en el rango [i,j′]
// y dejar que i sea j′+1 directamente. Aquí hay una visualización del código anterior.


function lengthOfLongestSubstring( s) {
      let n = s.length, ans = 0;
      map = new Map(); // current index of character
      // try to extend the range [i, j]
      for (let j = 0, i = 0; j < n; j++) {
          if (map.has(s.charAt(j))) {
              i = Math.max(map.get(s.charAt(j)), i);
          }
          ans = Math.max(ans, j - i + 1);
          map.set(s.charAt(j), j + 1);
      }
      return ans;
  }
  lengthOfLongestSubstring("abcabcbb")
