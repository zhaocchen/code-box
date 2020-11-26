/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
    let left: number = 0;
    let right: number = nums.length -1;
    while (left < right) {
        let mid: number = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid +1;
        } else {
            right = mid;
        }
    }
    return nums[right];
};
// @lc code=end

