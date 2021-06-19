/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length-1;
    let res: number = nums.length;
    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);
        let cur: number = nums[mid];
        if (cur == target) {
            return mid;
        } else if (cur > target) {
            res = mid;
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }
    return res;
};
// @lc code=end

