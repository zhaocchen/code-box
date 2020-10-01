/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    const nums1 = A
    const nums2 = (K + '').split('').map(d => parseInt(d))
    // console.log(nums1, nums2)
    let res = []
    let tmp = 0
    while (nums1.length || nums2.length) {
        let sum = tmp
        if (nums1.length && nums2.length) {
            sum += nums1.pop() + nums2.pop()
        } else if (nums1.length) {
            sum += nums1.pop()
        } else {
            sum += nums2.pop()
        }

        if (sum > 9) {
            sum -= 10
            tmp = 1
        } else {
            tmp = 0
        }
        res.unshift(sum)
    }
    if (tmp) res.unshift(tmp)
    // console.log(res)
    return res
};
// @lc code=end

