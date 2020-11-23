/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
    if (x == 0) return 0;
    if (x == 1) return 1;
    let left: number = 1;
    let right: number = x;
    while (left < right) {
        let mid: number = Math.floor((left + right) / 2);
        let spow = mid ** 2;
        if (spow == x) {
            return mid;
        } else if (spow < x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left - 1;

};
// @lc code=end

// console.log(mySqrt(4));
// console.log(mySqrt(8));
