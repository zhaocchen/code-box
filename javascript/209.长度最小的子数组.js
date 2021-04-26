/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let res = Number.MAX_SAFE_INTEGER
    let left = right = 0;
    let sum = 0;
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= s) {
            res = Math.min(res, right - left + 1)
            sum -= nums[left++]
        }
        right++
    }
    return res === Number.MAX_SAFE_INTEGER ? 0 : res
};
// @lc code=end

// console.log(minSubArrayLen(7, [2,3,1,2,4,3]))