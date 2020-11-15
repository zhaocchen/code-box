/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let used = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b)
    dfs(nums, 0, used, [], res);
    return res;
};

var dfs = function (arr, dep, used, solution, res) {
    if (dep === arr.length) {
        res.push(solution.slice())
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (used[i]) {
            continue;
        }
        if (i > 0 && arr[i] == arr[i - 1] && !used[i-1]) {
            continue;
        }
        solution.push(arr[i])
        used[i] = true;
        dfs(arr, dep+1, used, solution, res);
        solution.pop()
        used[i] = false;
    }
}
// @lc code=end
// console.log(permuteUnique([2,1,1]))
// console.log(permuteUnique([2, 2, 1, 1]))
