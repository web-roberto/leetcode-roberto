// ENUNCIADO
// Dada una matriz binaria nums y un entero k, devuelva el número máximo de 1 consecutivos en la matriz si puede cambiar como máximo k 0.
// El problema ha solicitado el subarreglo contiguo más largo que contiene solo 1s. Lo que hace que este problema sea un poco más complicado son los k cambios permitidos de 0 --> 1. Esto significa que un subarreglo contiguo de 1 podría no solo contener 1 sino también algunos 0. El número de 0 permitidos en un subarreglo dado viene dado por k.
// Example 1:

// Inut: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length


// Time Complexity: O(N)O(N)O(N), where NNN is the number of elements in the array. In worst case we might end up visiting every element of array twice, once by left pointer and once by right pointer.

// Space Complexity: O(1)O(1)O(1). We do not use any extra space.

  let fn = (nums, k) => {
    let left = 0, right;
      for (right = 0; right < nums.length; right++) {
          // If we included a zero in the window we reduce the value of k.
          // Since k is the maximum zeros allowed in a window.
          if (nums[right] == 0) {
              k--;
          }
          // A negative k denotes we have consumed all allowed flips and window has
          // more than allowed zeros, thus increment left pointer by 1 to keep the window size same.
          if (k < 0) {
              // If the left element to be thrown out is zero we increase k.
              k += 1 - nums[left];
              left++;
          }
      }     
      return right - left;
  }
  console.log(fn([0,1,1,1,0,1,0,1],1)) //k=1 -> 5 y k=2 -> 7


