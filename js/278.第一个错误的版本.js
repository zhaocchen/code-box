/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // 二分法
        let left = 1;
        let right = n;
        let middle = Math.ceil((left + right) / 2)
        let curRes = isBadVersion(middle)
        while (!curRes || (curRes && isBadVersion(middle - 1))) {
            console.log(middle, curRes, isBadVersion(middle - 1))
            if (middle == 1) return middle
            if (curRes) {
                right = middle - 1
            } else {
                left = middle + 1
            }
            middle = Math.ceil((left + right) / 2)
            curRes = isBadVersion(middle)
        }
        return middle
    };
};
// @lc code=end

