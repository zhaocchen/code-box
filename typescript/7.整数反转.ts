/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    let res: number = 0;
    let minus: boolean = false;
    if (x < 0) {
        x = -x;
        minus = true;
    }
    while (x > 0) {
        res = res * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    res = minus ? -res : res;
    let maxNumber: number = 2 ** 31;
    if (-maxNumber > res || maxNumber - 1 < res) {
        return 0;
    }
    return res;
};
// @lc code=end

