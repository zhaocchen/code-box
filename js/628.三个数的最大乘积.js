/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    let max1 = nums[len - 1] * nums[len - 2] * nums[len - 3]
    let max2 = nums[0] * nums[1] * nums[len - 1]
    return Math.max(max1, max2)
};

