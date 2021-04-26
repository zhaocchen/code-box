/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length;
    let mid = Math.round((left + right) / 2);
    while (nums.includes(mid)) {
        if (nums[mid] == mid) {
            left = mid+1;
        } else  {
            right = mid-1;
        }
        mid = Math.round((left + right) / 2);
    }
    return mid;
};
// @lc code=end

