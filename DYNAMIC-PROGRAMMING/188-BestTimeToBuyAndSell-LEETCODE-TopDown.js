class Solution {
    constructor() {
        this.prices = [];
        this.memo = [];
    }
    
    dp(i, transactionsRemaining, holding) {
        if (transactionsRemaining === 0 || i === this.prices.length) {
            return 0;
        }
        if (this.memo[i][transactionsRemaining][holding] === 0) {
            let doNothing = this.dp(i + 1, transactionsRemaining, holding);
            let doSomething;
            if (holding === 1) {
                doSomething = this.prices[i] + this.dp(i + 1, transactionsRemaining - 1, 0);
            } else {
                doSomething = -this.prices[i] + this.dp(i + 1, transactionsRemaining, 1);
            }
            
            this.memo[i][transactionsRemaining][holding] = Math.max(doNothing, doSomething);
        }
        return this.memo[i][transactionsRemaining][holding];
    }
    
    maxProfit(k, prices) {
        this.prices = prices;
        this.memo = new Array(prices.length).fill(0).map(() => new Array(k + 1).fill(0).map(() => new Array(2).fill(0)));
        return this.dp(0, k, 0);
    }
}
//Input: k = 2, prices = [2,4,1] -> Output: 2
// Input: k = 2, prices = [3,2,6,5,0,3] ->Output: 7
const solution= new Solution()
console.log('---solucion--',solution.maxProfit(2,[3,2,6,5,0,3]))