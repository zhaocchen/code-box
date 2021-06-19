/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
    if (nums.length == 0) return -1;
    let left: number = 0;
    let right: number = nums.length -1;
    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);
        let midNum: number = nums[mid];
        if (midNum == target) {
            return mid
        } else if (nums[left] <= midNum) {
            // 左侧为升序
            if (nums[left] <= target && target < midNum) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // 右侧为升序
            if (midNum < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

// console.log(search([4,5,6,7,0,1,2], 0))
// console.log(search([5,1,3], 3))
// console.log(search([4,5,6,7,8,1,2,3], 8))
