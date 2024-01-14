// Example 3: Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.
//using TEMPLATE: Two pointers: two inputs, exhaust both
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var combine = function(arr1, arr2) {
  // ans is the answer
  let ans = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          ans.push(arr1[i]);
          i++;
      } else {
          ans.push(arr2[j]);
          j++;
      }
  }
  
  while (i < arr1.length) {
      ans.push(arr1[i]);
      i++;
  }
  
  while (j < arr2.length) {
      ans.push(arr2[j]);
      j++;
  }
  
  return ans;
}