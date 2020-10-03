/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    dfs(nums, 0, res)
    return res
};
var dfs = function (arr, dep, res) {
    if (dep == arr.length) {
        res.push(arr.slice());
        return
    }
    for (let i = dep; i < arr.length; i++) {
        [arr[dep], arr[i]] = [arr[i], arr[dep]]
        dfs(arr, dep+1, res);
        [arr[dep], arr[i]] = [arr[i], arr[dep]]
    }
}
// @lc code=end
// console.log(permute([1,2,3]))
