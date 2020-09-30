/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.reduce((a, c) => a.concat(a.slice(-1)[0] + c), [0]).slice(1)
};
// @lc code=end

