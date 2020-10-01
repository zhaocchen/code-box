/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    // 检查一个数是否为 2 的幂：x > 0 and (x & (x - 1)) == 0
    // 若 xx 为 2 的幂且 x%3 == 1，则 xx 为 4 的幂
    let isPowerOf2 = num > 0 && (num & (num - 1)) == 0
    return  isPowerOf2 && num % 3 == 1;

};
// @lc code=end

