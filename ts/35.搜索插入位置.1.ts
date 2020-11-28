/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    for(let i: number = 0; i < nums.length;i++) {
        let cur: number = nums[i];
        if (cur >= target) return i;
    }
    return nums.length;
};
// @lc code=end

