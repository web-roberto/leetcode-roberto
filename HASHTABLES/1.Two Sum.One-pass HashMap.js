//Resulta que podemos hacerlo en una sola pasada. Mientras iteramos e insertamos elementos en la tabla 
//hash, también miramos hacia atrás para verificar si el complemento del elemento actual ya existe en 
//la tabla hash. Si existe, hemos encontrado una solución y devolvemos los índices inmediatamente.

// Time complexity: O(n)O(n)O(n).
// We traverse the list containing nnn elements only once. Each lookup in the table costs only O(1)O(1)O(1) time.

// Space complexity: O(n)O(n)O(n).
// The extra space required depends on the number of items stored in the hash table, which stores at most nnn elements.

let fn = (nums,target) => {
       map = new Map();
       //for(i of map)
      for (let i = 0; i <nums.length; i++) {
          const complement = target - nums[i];
          if (map.has(complement)) {
            const ans=[map.get(complement), i]
              return ans
         //     new int[] { map.get(complement), i };
          }
          map.set(nums[i], i);
      }
      // In case there is no solution, we'll just return null
      return null;
  }
  console.log(fn([1,2,3,4,5,6],8))

