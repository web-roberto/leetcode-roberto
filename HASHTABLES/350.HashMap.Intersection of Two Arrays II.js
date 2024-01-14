// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

//La solución para el problema anterior, 349. Intersección de dos matrices, habla de enfoques cuando cada número 
//en la salida debe ser único. Para este problema, necesitamos adaptar esos enfoques para que los números en el
// resultado aparezcan tantas veces como en ambas matrices.

//Algoritmo
// 1-If nums1 is larger than nums2, swap the arrays.
// 2-For each element in nums1:
//   Add it to the hash map m.
//     Increment the count if the element is already there.
// 3-Initialize the insertion pointer (k) with zero.
// 4-Iterate along nums2:
//   If the current number is in the hash map and count is positive:
//     Copy the number into nums1[k], and increment k.
//     Decrement the count in the hash map.
// 5- Return first k elements of nums1.

//Para nuestras soluciones aquí, usamos una de las matrices para almacenar el resultado. A medida que encontramos números comunes, los copiamos en la primera matriz comenzando desde el principio. Esta idea es de esta solución de sankitgupta.
let fn = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
      return fn(nums2, nums1);
  }
  m = new Map();
  for (let n of nums1) {
      m.set(n,0);
  }
  for (let n of nums1) {
    debugger;
      m.set(n, m.get(n) + 1);
  }
  let k = 0;
  for (let n of nums2) {
      let cnt = m.get(n);
      if (cnt > 0) {
          nums1[k++] = n;
          m.set(n, cnt - 1);
      }
  }
  return nums1.slice(0,k) 
}
console.log(fn(nums1=[4,9,5,4,4],nums2=[9,4,9,8,4])) //-> [9,4,4]
