// Un anagrama es una palabra o frase formada al reorganizar las letras de una palabra o frase diferente,
// generalmente usando todas las letras originales exactamente una vez. 
//Ejemplo 1: 
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//Ejemplo 2: Entrada: strs = [""] Salida: [[""]] 
//Ejemplo 3: Entrada: strs = ["a"] Salida: [[ "a"]]

//ALGORITMO:
// Podemos transformar cada cadena s en un conteo de caracteres, count, 
//que consta de 26 enteros no negativos que representan el número a's,  b's, 
// c's, etc. Usamos estos conteos como base para nuestro mapa hash. 
//En Java, la representación hashable de nuestro conteo será una cadena delimitada
// con caracteres '#'. Por ejemplo, abbccc será #1#2#3#0#0#0...#0 donde hay 26 entradas en total. En python, la representación será una tupla de las cuentas. Por ejemplo, abbccc será (1, 2, 3, 0, 0, ..., 0), donde nuevamente hay 26 entradas en total.


let fn = (strs) => {
      if (strs.length == 0) return [];
      ans = new Map();
      const count = new Array(26);
      let arrayCategories=[""];
      for (let s of strs) {
          count.fill(0);
          debugger;
          for (let c of s) 
          count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

           let sb = ""
          for (let i = 0; i < 26; i++) {
            sb+=(count[i]);
            sb+='#';
          }
          //key = sb.toString();
          key = sb;
          if (!ans.get(key)) {
            ans.set(key, []);
            ans.set(key,s);
            arrayCategories=[];
            arrayCategories.push(s)

          }
          //ans.get(key);
          else {
            let tmp=ans.get(key)
            //tmp+=(" ,"+s)
            if (Array.isArray(tmp)) arrayCategories =[...tmp,s] 
            else if (typeof tmp === 'string') arrayCategories =[tmp,s]
            
            console.log('--arrayCategories--',arrayCategories)
            console.log('--tmp--',tmp)
            //arrayCategories.push(s)
            ans.set(key,arrayCategories);
          }

      }
      let res=[]
      for (let [key, value] of ans) {
        res.push(value)
        }
      return res;
      //return [ans.values()];
  }
  console.log(fn(["eat","tea","tan","ate","nat","bat"])) //-> [["bat"],["nat","tan"],["ate","eat","tea"]]

