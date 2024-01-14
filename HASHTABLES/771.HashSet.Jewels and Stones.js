//Te dan cadenas de joyas que representan los tipos de piedras que son joyas y piedras que 
//representan las piedras que tienes. Cada carácter de las piedras es un tipo de piedra que tienes. 
//Quieres saber cuántas de las piedras que tienes también son joyas. 
//Las letras distinguen entre mayúsculas y minúsculas, por lo que "a" se considera un tipo de piedra diferente de "A". 
//Ejemplo 1: Entrada: joyas = "aA", piedras = "aAAbbbb" Salida: 3 
//Ejemplo 2: Entrada: joyas = "z", piedras = "ZZ" Salida: 0

// Para cada piedra, comprueba si coincide con alguna de las joyas. Podemos verificar eficientemente con un Hash Set.

// Time Complexity: O(J.length+S.length)). The O(J.length) part comes from creating J. The O(S.length) part comes from searching S.
// Space Complexity: O(J.length).

  function numJewelsInStones(j, s) {
      Jset = new Set();
      for (let jcar of j.split(""))
          Jset.add(jcar);
      let ans = 0;
      for (let scar of s.split(""))
          if (Jset.has(scar))
                ans++;
      return ans;
  }

  numJewelsInStones(j="aA",s="aAAbbbb")


// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Input: jewels = "z", stones = "ZZ"
// Output: 0