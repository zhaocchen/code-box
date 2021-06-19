/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
    if (nums.length == 1) return 0;
    // if (nums.length < 3) return -1;
    let left: number = 0;
    let right: number = nums.length - 1;
    while (left < right) {
        let mid: number = Math.floor((left + right) / 2);
        if (nums[mid] <= nums[mid+1]) {
            left = mid +1;
        } else {
            right = mid;
        }
    }
    return right;
};
// @lc code=end

