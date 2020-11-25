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
    while (k > 0) {
        let tmp: number = nums[nums.length -1];
        for (let i: number = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i-1];
        }
        nums[0] = tmp;
        // console.log(nums);
        k--;
    }
};
// @lc code=end

// rotate([1,2,3,4,5,6,7], 3)
