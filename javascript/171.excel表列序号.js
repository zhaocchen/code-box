/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let sum = 0;
    // let order = 0;
    let arr = [...s];
    for (let v of arr) {
        let curNum = v.charCodeAt() - 65 + 1;
        sum = sum * 26 + curNum
    }
    return sum
};
// @lc code=end

console.log(titleToNumber('AB'))