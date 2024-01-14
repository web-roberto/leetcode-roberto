 // O(n) y O(n)
 // de LEETCODE DIRECTAMENT4
 //https://leetcode.com/problems/make-the-string-great/solutions/2791389/javascript-solution-stack-approach-faster-than-97-52-of-javascript-submissions/
 /**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
  let stack = [];
  for (character of s){
      if (stack.length != 0 && Math.abs(stack[stack.length-1].codePointAt() - character.codePointAt()) == 32){
          stack.pop();
          continue;
      }
      stack.push(character);
  }
  return stack.join("");
};


// EN JAVA DE EDITORIAL DE LEETCODE
// class Solution {
//   public String makeGood(String s) {
//       // Use stack to store the visited characters.
//       Stack<Character> stack = new Stack<>();
      
//       // Iterate over 's'.
//       for (char currChar : s.toCharArray()) {
//           // If the current character make a pair with the last character in the stack,
//           // remove both of them. Otherwise, we the add current character to stack.
//           if (!stack.isEmpty() && Math.abs(stack.lastElement() - currChar) == 32) 
//               stack.pop();
//           else
//               stack.add(currChar);
//       }
      
//       // Returns the string concatenated by all characters left in the stack.
//       StringBuilder ans = new StringBuilder();
//       for (char currChar : stack) 
//           ans.append(currChar);
//       return ans.toString();
//   }
// }