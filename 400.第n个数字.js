/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if (n < 10) return n;
    let dep = 1;
    // 索引从0开始
    let count = 10 ** dep * dep - 1;
    while (n >= count) {
        n = n - count;
        dep++;
        count = (10 ** dep - 10 ** (dep - 1)) * dep;
    }
    // console.log(n, dep);
    n = n - 1;
    let num = 10 ** (dep - 1) + Math.floor(n / dep);
    let index = n % dep;
    let res = (num + '').charAt(index);
    // console.log(n, dep, num, index, res);
    return res;
};
// @lc code=endz

// console.log(findNthDigit(9))
// console.log(findNthDigit(10))
// // 1
// console.log(findNthDigit(11))
// console.log(findNthDigit(12))
// console.log(findNthDigit(20))