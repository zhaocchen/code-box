/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let res = []
    for (let i = 0; i < n; i++) {
        res.push(nums[i], nums[n + i])
    }
    return res
};
// @lc code=end

