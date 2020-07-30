/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length == 0) return -1;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = Math.round((left + right) / 2);
        let curNum = nums[mid];
        if (curNum == target) {
            return mid;
        } else if (curNum < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};
// @lc code=end

