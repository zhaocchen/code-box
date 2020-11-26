/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    let res: number[] = [-1, -1];
    let firstIndex: number = helper(nums, target, true);

    if (firstIndex == nums.length || nums[firstIndex] != target) {
        return res;
    }

    res[0] = firstIndex;
    res[1] = helper(nums, target, false)-1;

    return res;
};

function helper(nums: number[], target: number, isFirst: boolean) {
    let left: number = 0;
    let right: number = nums.length;

    while (left < right) {
        let mid: number = Math.floor((left + right) / 2);
        let midNum: number = nums[mid];
        if (midNum > target) {
            right = mid;
        } else if (isFirst && midNum == target) {
            right = mid;
        } else {
            left = mid+1;
        }
    }

    return left;
} 
// @lc code=end

