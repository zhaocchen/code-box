/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const nums = Array.from({length: n}, (v, i) => start + 2 * i);
    return nums.reduce((a, c) => a ^ c, 0)
};
// @lc code=end

