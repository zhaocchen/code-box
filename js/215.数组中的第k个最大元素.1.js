/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 选择排序
    let p = 0;
    while (p < nums.length) {
        let maxIndex = p;
        for(let i = p; i < nums.length;i++) {
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }
        if (p != maxIndex) {
            [nums[p], nums[maxIndex]] = [nums[maxIndex], nums[p]];
        }
        if (p == (k-1)) return nums[p];
        p++;
    }
};
// @lc code=end

// console.log(findKthLargest([3,2,1,5,6,4], 2))
