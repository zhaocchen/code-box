/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    var dp = [];
    for (var i = 0; i <= N; i++) {
        dp[i] = i < 2 ? i : dp[i - 1] + dp[i - 2]
    }
    // console.log(dp)
    return dp.pop()
};

// 0-0, 1-1, 2-1, 3-2, 4-3, 5-5, 6-8
// console.log(fib(5))
// @lc code=end

