/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    let res: number[][] = [];
    let index: number = -1;
    for (let interval of intervals) {
        if (index == -1 || res[index][1] < interval[0]) {
            // 保留
            res.push(interval);
            index++;
        } else {
            // 求交集
            res[index][1] = Math.max(res[index][1], interval[1])
        }
        // 遗弃
    }
    return res;
};
// @lc code=end

