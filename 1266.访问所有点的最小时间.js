/*
 * @lc app=leetcode.cn id=1266 lang=javascript
 *
 * [1266] 访问所有点的最小时间
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for (let i = 1; i < points.length; i++) {
        const x = Math.abs(points[i][0] - points[i - 1][0])
        const y = Math.abs(points[i][1] - points[i-1][1])
        count += Math.max(x, y)
    }
    return count
};
// @lc code=end

