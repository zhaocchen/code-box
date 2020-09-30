/*
 * @lc app=leetcode.cn id=1313 lang=javascript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        let len = nums[i]
        let num = nums[i + 1];
        const subNums = new Array(len).fill(num)
        res.push(...subNums)
    }
    return res
};
// @lc code=end

