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
//Dada una subcadena con un índice final fijo en la cadena, mantenga un HashMap para registrar la frecuencia de cada carácter en la subcadena actual. Si algún carácter aparece más de una vez, elimine los caracteres más a la izquierda hasta que no haya caracteres duplicados.//Algoritmo 
// Algoritmo
// El enfoque ingenuo es muy sencillo. Pero es demasiado lento. Entonces, ¿cómo podemos optimizarlo?
// En los enfoques ingenuos, verificamos repetidamente una subcadena para ver si tiene un carácter duplicado. Pero es innecesario. Si una subcadena sijs_{ij}s
// ij del índice iii a j−1 ya está verificado para que no tenga caracteres duplicados. Solo necesitamos verificar si s[j] ya está en la subcadena sijs_{ij}s ij .
// Para verificar si un carácter ya está en la subcadena, podemos escanear la subcadena, lo que conduce a un algoritmo O(n^2). Pero lo podemos hacer mejor.
// Al usar HashSet como una ventana deslizante, verificar si un carácter en el actual se puede hacer en O (1).
// Una ventana deslizante es un concepto abstracto comúnmente utilizado en problemas de matriz/cadena. Una ventana es un rango de elementos en la matriz/cadena que generalmente se define por los índices de inicio y fin, es decir, [i, j) (cerrado a la izquierda, abierto a la derecha). Una ventana deslizante es una ventana que "desliza" sus dos límites en una dirección determinada. Por ejemplo, si deslizamos [i,j) a la derecha por 11 elementos, se convierte en [i+1,j+1] (cerrado a la izquierda, abierto a la derecha).
// Volvamos a nuestro problema. Usamos HashSet para almacenar los caracteres en la ventana actual [i,j) (j=ij = ij=i inicialmente). Luego deslizamos el índice j hacia la derecha. Si no está en HashSet, deslizamos j más lejos. Haciéndolo hasta que s[j] ya esté en el HashSet. En este punto, encontramos que el tamaño máximo de las subcadenas sin caracteres duplicados comienza con el índice i. Si hacemos esto para todo i, obtenemos nuestra respuesta.

// Analisis de Complejidad
// Time complexity : O(2n)=O(n)O(2n) = O(n)O(2n)=O(n). In the worst case each character will be visited twice by iii and jjj.
// Space complexity : O(min(m,n))O(min(m, n))O(min(m,n)). Same as the previous approach. We need O(k)O(k)O(k) space for the sliding window, where kkk is the size of the Set. The size of the Set is upper bounded by the size of the string nnn and the size of the charset/alphabet mmm.


function lengthOfLongestSubstring( s) {
      chars = new Map();
        let left = 0;
        let right = 0;
        let res = 0;
        while (right < s.length) {
            //debugger
            const charRight = s.charAt(right);
            if (chars.get(charRight)>=0) chars.set(charRight, chars.get(charRight) + 1);
            else chars.set(charRight,0)
            while (chars.get(charRight) > 0) {
                const charLeft = s.charAt(left);
                    chars.set(charLeft, chars.get(charLeft) - 1);
                left++;
            }
            res = Math.max(res, right - left + 1);
            right++;
        }
        return res;
    }
    lengthOfLongestSubstring("abcabcbb")