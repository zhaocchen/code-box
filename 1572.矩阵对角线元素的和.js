/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    if (mat.length == 0) return 0
    if (mat.length == 1) return mat[0][0]
    let res = 0;
    const len = mat[0].length
    for (let i = 0; i < len; i++) {
        res += (mat[i][i] + mat[i][len - 1 - i ])
    }
    if (len % 2) {
        const i = Math.floor(len / 2)
        res -= mat[i][i]
    }
    return res
};
// @lc code=end

