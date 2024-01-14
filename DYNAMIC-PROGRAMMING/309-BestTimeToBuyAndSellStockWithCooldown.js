class Solution {
  maxProfit(prices) {
    let sold = Number.MIN_SAFE_INTEGER, held = Number.MIN_SAFE_INTEGER, reset = 0;
    for (let price of prices) {
      let preSold = sold;
      sold = held + price;
      held = Math.max(held, reset - price);
      reset = Math.max(reset, preSold);
      console.log('sols:',sold, 'held:',held,' reset',reset)
    }
    return Math.max(sold, reset);
  }
}
const solution= new Solution()
console.log('---solucion--',solution.maxProfit([7,1,5,3,6,4]))


