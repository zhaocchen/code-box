/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    let len: number = nums.length;
    let total: number = nums.reduce((a, c) => a + c, 0);
    let left: number = 0;
    for (let i: number = 0; i < len; i++) {
        let cur: number = nums[i];
        if (left == (total - left - cur)) {
            return i;
        }
        left += cur;
    }
    return -1;
};
// @lc code=end

// console.log(pivotIndex([1,7,3,6,5,6]))
