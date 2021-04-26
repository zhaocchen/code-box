/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let prev = [];
    let res = [];
    dfs(S, 0, prev, res);
    return res;
};

function dfs(S, depth, prev, res) {
    if (depth == S.length) {
        res.push(prev.slice().join(''));
        return;
    }
    let cur = S.charAt(depth);
    if ((/[a-zA-Z]/).test(cur)) {
        cur = cur.toLocaleLowerCase();
    }
    prev.push(cur);
    dfs(S, depth+1, prev, res);
    prev.pop();
    if ((/[a-z]/).test(cur)) {
        prev.push(cur.toLocaleUpperCase());
        dfs(S, depth+1, prev, res);
        prev.pop();
    }
}
// @lc code=end

