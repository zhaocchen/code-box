/*
 * @lc app=leetcode.cn id=867 lang=typescript
 *
 * [867] 转置矩阵
 */

// @lc code=start
function transpose(A: number[][]): number[][] {
    let res: number[][] = [];
    for (let i:number = 0; i < A[0].length; i++) {
        let tmp: number[] = [];
        for (let j: number = 0; j < A.length; j++) {
            tmp.push(A[j][i])
        }
        res.push(tmp);
    }
    return res
};
// @lc code=end

