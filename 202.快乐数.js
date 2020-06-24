/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = n
    let nums;
    let record = [];
    while (sum !== 1 && !record.includes(sum)) {
        nums = [...String(sum)];
        record.push(sum)
        sum = 0;
        for (let num of nums) {
            sum += Number(num) ** 2
        }
        // console.log(sum)
    }
    return sum === 1
};

var testData = [
    19,
    7
]

for (let v of testData) {
    console.log(isHappy(v))
}
// @lc code=end

