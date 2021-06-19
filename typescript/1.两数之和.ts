/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    for (let i: number = 0; i < nums.length; i++) {
        let x: number = nums[i];
        let y: number = target - x;
        let targetIndex = nums.lastIndexOf(y);
        if (targetIndex > 0 && targetIndex != i) {
            return [i, targetIndex];
        }
    }
    return [];
};
// @lc code=end

