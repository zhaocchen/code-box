/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let longSet = new Set(nums1)
    let shortSet = new Set(nums2)
    let res = []
    if (longSet.size < shortSet.size) {
        [longSet, shortSet] = [shortSet, longSet]
    }
    shortSet.forEach(d => {
        if (longSet.has(d)) {
            res.push(d)
        }
    })
    return res
};
// @lc code=end

