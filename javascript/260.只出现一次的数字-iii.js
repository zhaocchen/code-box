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
    for(let num of nums) {
        xor ^= num;
    }
    let divide = 1;
    while((divide & xor) == 0) {
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
    return [res1, res2];
};
// @lc code=end

