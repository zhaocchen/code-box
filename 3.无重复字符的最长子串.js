/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length
    var start = 0
    var maxSubstr = ''
    while( start < len) {
        var end = start
        var curSubstr = ''
        while (!curSubstr.includes(s[end]) && end < len) {
            curSubstr += s[end]
            end++
        }
        if (curSubstr.length > maxSubstr.length) {
            maxSubstr = curSubstr
        }
        start += 1
        end = start
    }
    return maxSubstr.length
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// @lc code=end

