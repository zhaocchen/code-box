/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    //  理解为最多包含K个0的最长子序列
    let res = 0
    let left = right = 0
    let count = 0
    while (right < A.length) {
        if (A[right] == 0) {
            count++
        }
        while (count > K) {
            if (A[left] == 0) {
                count--
            }
            left++
        }
        res = Math.max(res, right - left + 1)
        right++
    }
    return res
};

// console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
// @lc code=end

