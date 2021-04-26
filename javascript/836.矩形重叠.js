/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const isTop = rec1[3] <= rec2[1]
    const isBottom = rec1[1] >= rec2[3]
    const isLeft = rec1[2] <= rec2[0]
    const isRight = rec1[0] >= rec2[2]
    return !(isTop || isBottom || isLeft || isRight)
};
// @lc code=end

