/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 0) return 0
    if (n == 1) return 1
    dp = Array.from({length: n}, (v, i) => i+1)
    if (n > 2) {
        for (let index = 3; index < n; index++) {
            dp[index] = dp[index-1] + dp[index -2]
        }
    }
    return dp.pop()
};
// @lc code=end

