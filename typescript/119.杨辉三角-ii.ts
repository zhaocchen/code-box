/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    if (rowIndex == 0) return [1];
    if (rowIndex == 1) return [1, 1];
    let prev: number[] = getRow(rowIndex-1);
    let len: number = rowIndex +1;
    let res: number[] = new Array(len).fill(1);
    for (let i: number = 1; i < Math.ceil(len /2); i++) {
        let cur: number = prev[i-1]+prev[i];
        res[i] = cur;
        if (len - i != i) {
            res[len - 1 - i] = cur;
        }
    }
    return res;
};
// @lc code=end

