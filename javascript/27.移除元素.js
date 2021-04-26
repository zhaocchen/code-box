/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort()
    let index1 = nums.indexOf(val)
    if (index1 < 0) return nums.length;
    let index2 = nums.lastIndexOf(val)
    nums.splice(index1, index2-index1+1)
    return nums.length;
};
// @lc code=end

