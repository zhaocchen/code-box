/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x + '';
    let len = x.length
    let half = Math.ceil(len / 2)
    // console.log(len, half)
    for (let i = 0; i <= half; i++) {
        if (x.charAt(i) != x.charAt(len-i-1)) {
            return false
        }
    }
    return true;
};
// @lc code=end

// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))