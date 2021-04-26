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
    var end = -1
    var hashTable = new Set()
    var res = 0
    for (let i=0; i < len; i++) {
        if (i != 0) {
            hashTable.delete(s.charAt(i - 1))
        }
        while ((end + 1 < len) && !hashTable.has(s.charAt(end + 1))) {
            hashTable.add(s.charAt(end + 1))
            end++
        }
        res = Math.max(res, end - i + 1)
    }
    return res
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// @lc code=end

