/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0;
    for(let i of nums) {
        xor ^= i;
    }
    let divide = 1;
    while((divide & xor) == 0) {
        divide <<= 1;
    }
    let res1 = 0, res2 = 0;
    for (let i of nums) {
        if (divide & i) {
            res1 ^= i;
        } else {
            res2 ^= i;
        }
    }
    return [res1, res2];
};
// @lc code=end

