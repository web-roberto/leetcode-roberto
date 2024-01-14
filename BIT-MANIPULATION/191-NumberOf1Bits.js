//https://leetcode.com/problems/number-of-1-bits/description/
function hammingWeight(n) {
  let sum = 0;
  while (n !== 0) {
      sum++;
      n &= (n - 1);
  }
  return sum;
}
//Input: number = 00000000000000000000000000001011 -> 3 unos
//Input:const number =1111111111111111111111101 //-> 31 unos ME DA 1, NO FUNCIONA BIEN
const number=00000000000000000000000000001011;
console.log('--hammingWeight--',hammingWeight(number))


