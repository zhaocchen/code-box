/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let titles = [];
    while (n > 0) {
        n -= 1;
        let curNum = n % 26 + 65;
        n = Math.floor(n / 26);
        titles.unshift(String.fromCharCode(curNum));
    }
    return titles.join("")
};
// @lc code=end

console.log(convertToTitle(28))
console.log(convertToTitle(26))
