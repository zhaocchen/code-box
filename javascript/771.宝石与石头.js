/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let res = 0;
    for (let i = 0; i < S.length; i++) {
        const cur = S.charAt(i);
        if (J.indexOf(cur) > -1) {
            res++
        }
    }
    return res;

};
// @lc code=end

