/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    let unique: Set<number> = new Set(nums);
    return unique.size != nums.length;
};
// @lc code=end

