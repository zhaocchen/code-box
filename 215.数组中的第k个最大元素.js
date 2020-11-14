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
    // 快速排序
    // 目标第nums.length - k
    const len = nums.length;
    if (len == 1) return nums[0];
    k = len - k;
    let start = 0;
    let end = len - 1;
    while (start <= end) {
        let p = partition(nums, start, end);
        if (p == k ) {
            return nums[p];
        }
        if (p > k) {
            end = p-1;
        } else {
            start = p+1;
        }
    }
    return -1;
};

function partition(arr, start, end) {
    if (start >=  end) return start;
    let pivot = arr[start];
    while (start < end) {
        while(start < end && arr[end] >= pivot) end--;
        if (start < end) {
            arr[start] =arr[end];
            start++;
        }
        while (start < end && arr[start] < pivot) start++;
        if (start < end) {
            arr[end] =arr[start];
            end--;
        }
    }
    arr[start] = pivot;
    return start;
}
// @lc code=end

// console.log(partition([3,2,1,5,6,4], 0, 5))
// console.log(findKthLargest([3,2,1,5,6,4], 2))
// console.log(findKthLargest([2,1], 2))
