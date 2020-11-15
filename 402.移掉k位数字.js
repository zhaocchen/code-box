/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let arr = [...num];
    while (k > 0) {
        let index = 0;
        while (index < arr.length-1 && arr[index+1] >= arr[index]) index++;
        arr.splice(index, 1)
        k--;
    }
    return arr.join('').replace(/^0*/g, '') || '0';
};
// @lc code=end
// console.log(removeKdigits('112', 1))
