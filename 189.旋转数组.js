/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = k % (nums.length);
    // for(let i = 0; i < len; i++) {
    //     let pop = nums.pop()
    //     nums.unshift(pop)
    // }
    nums.unshift(...nums.splice(-len))
};
// @lc code=end

