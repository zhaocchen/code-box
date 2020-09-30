/*
 * @lc app=leetcode.cn id=1450 lang=javascript
 *
 * [1450] 在既定时间做作业的学生人数
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0
    for (let i in startTime) {
        if (startTime[i] > queryTime) {
            continue;
        }
        if (endTime[i] >= queryTime) {
            count++
        }
    }
    return count
};
// @lc code=end

