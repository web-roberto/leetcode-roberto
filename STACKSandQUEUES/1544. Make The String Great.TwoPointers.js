// NO ENCUENTRO LA SOLUCION EN JAVASCRIPT DIRECTAMENTE EN LEETCODE

// en JAVA  O(N) y O(1)
// https://leetcode.com/problems/make-the-string-great/solutions/2794692/one-pass-recursive-two-pointer-approach-o-n/

// class Solution {
//   StringBuilder sb;
//   public String makeGood(String s) {
//       // string builder provides good control over string modification.
//       sb = new StringBuilder(s);
//       recurMakeGood(0);
//       return sb.toString();
//   }

//   void recurMakeGood(int index){
//       if(index<0)
//           index=0;
//       if(sb.length()<2)
//           return;
//       if(index==sb.length()-1){
//           return;
//       }
//       char c1 = sb.charAt(index);
//       char c2 = sb.charAt(index+1);
//       if(areTheyPair(c1, c2)){
//           sb.deleteCharAt(index);
//           // length is reduced by one..
//           // so index+1 element will now point to index
//           sb.deleteCharAt(index);
//           // two data are deleted, need to check next data with previous one so reduce by 2
//           // later we are incrementing this by one
//           index-=2;
//       }
//       // pointing to the next element
//       recurMakeGood(index+1);
//   }

//   boolean areTheyPair(char c1, char c2){
//       return areTheypairInside(c1,c2) || areTheypairInside(c2, c1);
//   }

//   boolean areTheypairInside(char c1, char c2){
//       return c1-'a' == c2-'A';
//   }
// }



// en C++ DE EDITORIAL DE LEETCODE
// class Solution {
//   public:
//       string makeGood(string s) {
//           // Initialize 'end = 0' since the good string is empty.
//           int end = 0;
//           for (int cur = 0; cur < s.size(); ++cur) {
//               // If s[cur] makes a pair with the last character s[end - 1] in good string,
//               // remove s[end - 1] by decrementing 'end' by 1. 
//               // Otherwise, add s[cur] to the good string by overwritting s[end] by s[cur].
//               if (end > 0 && abs(s[cur] - s[end - 1]) == 32)
//                   end--;
//               else {
//                   s[end] = s[cur];
//                   end++;
//               }
//           }
          
//           // Once the iteration ends, the string before 'end' is the good string.
//           return s.substr(0, end);  
//       }
//   };