/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const len = nums.length
    if(len === 0) return 0
    if(len === 1) return nums[0]
    let dp = new Array(len).fill(null)
    dp[0] = nums[0]
    let index = 1
    while(index < len) {
        const curNum = nums[index]
        dp[index] = Math.max(dp[index-1]+curNum, curNum)
        index++
    }
    return Math.max(...dp)
};
// @lc code=end