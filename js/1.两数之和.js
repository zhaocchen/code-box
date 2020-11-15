/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 220ms+44.3mb
// var twoSum = function(nums, target) {
//     // nums.sort((a, b) => a - b);
//     for (var i = 0; i < nums.length; i++) {
//         let difference = target - nums[i];
//         newNum = nums.slice(i+1)
//         if (newNum.includes(difference)) {
//             return [i, newNum.indexOf(difference)+i+1]
//         }
//     }
// };

// 116ms+38.5mb
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (typeof map.get(nums[i]) == 'number') {
        // if (map.get(nums[i]) != undefined) {
        // if (map.get(nums[i]) != void 0) {
            return [map.get(nums[i]), i];
        }
        map.set(target - nums[i], i);
    }
}
// @lc code=end

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3, 3], 6))