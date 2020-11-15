/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    const sum = a ^ b
    const carry = (a & b) << 1
    if (carry != 0) {
        return getSum(sum, carry)
    }
    return sum
};
// @lc code=end

