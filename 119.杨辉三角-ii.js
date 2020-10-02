/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex == 0) return [1];
    if (rowIndex == 1) return [1, 1];
    let prev = getRow(rowIndex - 1)
    let res = new Array(rowIndex+1).fill(1)
    // console.log(res)
    for (let i = 1; i <= Math.ceil(rowIndex / 2); i++) {
        let num = prev[i] + prev[i - 1]
        res[i] = num
        if (i != rowIndex / 2) {
            res[rowIndex - i] = num
        }
    }
    return res
};
// @lc code=end

