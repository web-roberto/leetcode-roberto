// use TEMPLATE: Two pointers,One Input. Oposite end
//PYTHON: Approach 1: Recursion, In-Place, O(N)\mathcal{O}(N)O(N) Space
//PYTHON Approach 2: Two Pointers, Iteration, O(1)\mathcal{O}(1)O(1) Space
// https://leetcode.com/problems/reverse-string/editorial/

// DESCRIPTION OF THE PROBLEM:
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

const fn = arr => {
  let left = 0, ans = 0, right = arr.length - 1;
  while (left < right) {
      // do some logic here with left and rightç            
      const tmp = arr[left];
      arr[left++] = arr[right]; //arr[left]=arr[right]; left++
      arr[right--] = tmp;
      // if (CONDITION) {//arr[right]=tmp; right--
      //     left++;
      // } else {
      //     right--;
      // }
  }

  return arr;
}
console.log(fn([1,2,3,4,5])) //[5,4,3,2,1]