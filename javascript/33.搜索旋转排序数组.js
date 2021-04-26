/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midNum = nums[mid]
        let leftNum = nums[left]
        let rightNum = nums[right]
        if (midNum == target) {
            return mid;
        } else if (midNum < rightNum) {
            if (midNum < target && target <= rightNum) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            // midNum >= rightNum
            if (leftNum <= target && target < midNum) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};
// @lc code=end

console.log(search([5, 1, 3], 3))
