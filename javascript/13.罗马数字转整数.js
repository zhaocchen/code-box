/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    const romeMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])
    let nums = [...s].map(d => romeMap.get(d))
    let i
    for (i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i- 1]) {
            res += (nums[i] - nums[i-1])
            i++
        } else {
            res += nums[i-1]
        }
    }
    if (i == nums.length) res += nums.pop()
    return res
};
// @lc code=end

