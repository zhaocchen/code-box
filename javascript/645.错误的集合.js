/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    for (let i=1; i<=nums.length; i++) {
        xor ^= i;
    }
    let divide = 1;
    while ((xor & divide) == 0) {
        divide <<= 1;
    }
    let res1 = 0, res2 = 0;
    for (let num of nums) {
        if (divide & num) {
            res1 ^= num;
        } else {
            res2 ^= num;
        }
    }
    for (let i=1; i<=nums.length; i++) {
        if (divide & i) {
            res1 ^= i;
        } else {
            res2 ^= i;
        }
    }
    return nums.includes(res1) ? [res1, res2] : [res2, res1];
};
// @lc code=end

