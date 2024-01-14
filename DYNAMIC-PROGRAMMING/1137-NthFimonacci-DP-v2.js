//https://leetcode.com/problems/n-th-tribonacci-number/solutions/3116130/simple-and-efficient-solution-with-comments-and-explanation-beats-100/
/**
 * @param {number} n
 * @return {number}
 */
const cache = [0, 1, 1];
var tribonacci = function (n) {
    if (cache[n] === undefined) {
        cache[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
    }
    return cache[n];
};
console.log('--solucion',tribonacci(6))
