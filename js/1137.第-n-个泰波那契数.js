/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    if(n === 2) return 1
    let dp = new Array(n+1).fill(null)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    let i = 3
    while(i < n+1) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
        i++
    }
    console.log(dp)
    return dp.pop()
};
// @lc code=end

