/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]
    let dp = new Array(len).fill(null)
    dp[0] = nums[0]
    let dpMin = [...dp]
    let i = 1
    while (i < len) {
        const cur = nums[i]
        if (cur >= 0) {
            dpMin[i] = Math.min(dpMin[i-1]*cur, cur)
            dp[i] = Math.max(dp[i-1]*cur, cur)
        } else {
            dpMin[i] = Math.min(dp[i-1]*cur, cur)
            dp[i] = Math.max(dpMin[i-1]*cur, cur)
        }
        i++
    }
    return Math.max(...dp)
};
// @lc code=end

