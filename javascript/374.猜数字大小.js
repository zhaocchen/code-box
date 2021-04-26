/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    let middle = Math.ceil((left + right) / 2)
    let curRes = guess(middle)
    while (middle > 1) {
        if (!curRes) return middle
        if (curRes < 0) {
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = Math.ceil((left + right) / 2)
        curRes = guess(middle)
    }
    return middle
};
// @lc code=end

