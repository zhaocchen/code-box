/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
    if (nums.length == 0) return -1;
    if (nums.length == 1) return nums[0] == target ? 0 : -1;
    let left: number = 0;
    let right: number = nums.length - 1;
    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);
        let cur = nums[mid];
        if (cur == target) {
            return mid;
        } else if (cur > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
// @lc code=end

