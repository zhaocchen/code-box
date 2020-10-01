/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const nums1 = [...num1].map(d => parseInt(d))
    const nums2 = [...num2].map(d => parseInt(d))
    let res = []
    let tmp = 0
    while (nums1.length || nums2.length) {
        let sum = tmp
        if (nums1.length && nums2.length) {
            sum += nums1.pop() + nums2.pop()
        } else if (nums1.length) {
            sum += nums1.pop()
        } else {
            sum += nums2.pop()
        }

        if (sum > 9) {
            sum -= 10
            tmp = 1
        } else {
            tmp = 0
        }
        res.unshift(sum)
    }
    if (tmp) res.unshift(tmp)
    // console.log(res)
    return res.join("")
};
// @lc code=end
// console.log(addStrings('1', '9'))
