/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = nums1.length-1
    m -= 1
    n -= 1
    while(len > -1) {
        if (m < 0) {
            // nums1.splice(0, n, ...nums2.slice(0, n))
            while (n > -1) {
                nums1[len] = nums2[n]
                n -= 1
                len -= 1
            }
            return nums1
        }
        if (n < 0) {
            return nums1
        }
        if (nums1[m] >= nums2[n]) {
            nums1[len] = nums1[m]
            m -= 1
        } else {
            nums1[len] = nums2[n]
            n -= 1
        }
        len -= 1
    }
    return nums1
};

// var testData = [
//     {nums1: [0], m: 0, nums2: [1], n: 1}
// ]

// for (let v of testData) {
//     console.log(merge(v.nums1, v.m, v.nums2, v.n))
// }
// @lc code=end

