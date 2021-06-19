/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    let xStr: string = String(x);
    let len: number = xStr.length;
    let half: number = Math.ceil(len / 2);
    for (let i: number = 0; i <= len; i++) {
        if(xStr.charAt(i) != xStr.charAt(len - i - 1)) {
            return false;
        }
    }
    return true;
};
// @lc code=end

// console.log(isPalindrome(121))
