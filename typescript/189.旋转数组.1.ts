/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    let tmp: number[] = nums.splice(0, nums.length - k);
    // console.log(nums, tmp);
    // nums = nums.concat(tmp);
    nums.push(...tmp);
    // console.log(nums)
};
// @lc code=end

// rotate([1,2,3,4,5,6,7], 3)
