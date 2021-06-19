/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;
    let num: number = x;
    let res: number = 0;
    while (num > 0) {
        res = res * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return res == x;
};
// @lc code=end

