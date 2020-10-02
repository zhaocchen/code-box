/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0) return 0;
    let last = 0.0
    let res = 1.0
    while (last != res) {
        last =res
        res = (res + x / res) / 2
    }
    return Math.floor(res)
};
// @lc code=end

