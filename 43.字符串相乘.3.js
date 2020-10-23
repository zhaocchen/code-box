/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    console.log(num1, num2);
    // Karatsuba
    const len1 = num1.length, len2 = num2.length;
    if (len1 < 2 || len2 < 2) return num1 * num2 + '';
    // 补齐
    const half = Math.max(len1, len2) / 2;
    let high1 = num1.substr(0, half), low1 = num1.substr(half);
    let high2 = num2.substr(0, half), low2 = num2.substr(half);
    let z0 = multiply(low1, low2);
    let z1 = multiply(addString(high1, low1),  addString(high2, low2));
    let z2 = multiply(high1, high2);
    // console.log(high1, low1, high2, low2, z0, z2, z1);
    console.log(z0, low1, high2, low2, z0, z2, z1);
    const res = z0 + (z1 - z2 - z0) * (10 ** half) + z2 * (10 ** (2 * half));
    return res;
};

function minusString(s1, s2) {
    // 减
}

function addString(s1, s2) {
    let nums1 = s1.split('').map(d => parseInt(d));
    let nums2 = s2.split('').map(d => parseInt(d));
    let res = [];
    let tmp = 0;
    while(nums1.length || nums2.length) {
        let num1 = nums1.pop() || 0;
        let num2 = nums2.pop() || 0;
        let sum = num1 + num2 + tmp;
        if (sum > 9) {
            sum -= 10;
            tmp = 1;
        } else {
            tmp = 0;
        }
        res.unshift(sum)
    }
    if (tmp) res.unshift(tmp);
    return res.join('');
}

// @lc code=end
// console.log(multiply('0', '63'), '0')
// console.log(multiply('2', '6'), 1575)
console.log(multiply('25', '63'), 1575)
// console.log(multiply('123', '456'), 56088)
// console.log(multiply('123456789', '987654321'), '121932631112635269')
// console.log(multiply('9333852702227987', '85731737104263'), '800207406037324579815815608581')
