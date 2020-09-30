/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const nums = [...String(n)]
    const sum = nums.reduce((a, c) => a + c * 1, 0)
    const product = nums.reduce((a, c) => a * c, 1)
    return product - sum
};
// @lc code=end

