//ENUNCIADO:
//Se le proporciona una matriz de números enteros que consta de n elementos y un número entero k. Encuentre un subarreglo contiguo cuya longitud sea igual a k que tenga el valor promedio máximo y devuelva este valor. Se aceptará cualquier respuesta con un error de cálculo inferior a 10-5.
// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000
// Constraints:
// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

// Time complexity : O(n)O(n)O(n). We iterate over the given numsnumsnums array of length nnn once only.
// Space complexity : O(1)O(1)O(1). Constant extra space is used.

// PATRON SLIDING WINDOW:
let fn = (nums, k) => {
  let sum=0;
      for(let i=0;i<k;i++)
          sum+=nums[i];
      let res=sum;
      for(let i=k;i<nums.length;i++){
          sum+=nums[i]-nums[i-k];
              res=Math.max(res,sum);
      }
      return res/k;

}
console.log(fn([1,12,-5,-6,50,3,-30,25],4)) //12.75
