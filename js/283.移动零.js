/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    while (start <= end) {
        // console.log(start, end, nums[start])
        if (nums[start] == 0) {
            for (let i=start; i <= end; i++) {
                nums[i] = nums[i + 1]
            }
            nums[end] = 0;
            end--;
        } else {
            start++
        }
    }
    return nums;
};

// console.log(moveZeroes([0,0,1]))
// @lc code=end

