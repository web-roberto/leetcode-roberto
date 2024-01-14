//https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/89289/javascript-93ms-no-bit-manipulation/

var toHex = function(num) {
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
  if (num == 0) return "0";
  
  if (num < 0) {
      num += Math.pow(2,32);
  }
  var res = "";
  
  while(num > 0) {
      var digit = num % 16;
      res = arr[digit] + res;
      num = Math.floor(num / 16);
  }
  return res;
};
//Input: num = 26 ->Output: "1a"
//Input: num = -1 Output: "ffffffff"
 console.log('---to Hex--',toHex(26))