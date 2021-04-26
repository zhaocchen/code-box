/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // dp[i] = mix(dp[i] , dp[i-coin] + 1) 
    var dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (var i = 1; i < amount+1; i++) {
        for (var coin of coins) {
            if (i >= coin ) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1)
            }
        }
    }
    // console.log(dp)
    var lastDp = dp.pop()
    return lastDp == Infinity ? -1 : lastDp;
};

// console.log(coinChange([1, 2, 5], 11))
// @lc code=end

