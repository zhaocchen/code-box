/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res1 = 0;
    let res2 = 0;
    for (let i of nums) {
        res1 = ~res2 & (res1 ^ i);
        res2 = ~res1 & (res2 ^ i);
    }
    return res1;
};
// @lc code=end

