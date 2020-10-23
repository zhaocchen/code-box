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
    if ([num1, num2].includes('0')) return '0';
    let res = '';
    const len1 = num1.length, len2 = num2.length;
    for(let i = 0; i < len2;i++) {
        let cur2 = num2.charAt(len2 - i - 1);
        let tmp = '';
        for(let j = 0; j < len1; j++) {
            let cur1 = num1.charAt(len1 - j - 1);
            tmp = addString(tmp, cur1 * cur2 + ('0'.repeat(j)));
            // console.log(cur1, tmp);
        }
        res = addString(res, tmp + ('0'.repeat(i)));
    }
    return res
};

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
// console.log(multiply('25', '63'), 1575)
// console.log(multiply('123', '456'), 56088)
// console.log(multiply('123456789', '987654321'), '121932631112635269')
// console.log(multiply('9333852702227987', '85731737104263'), '800207406037324579815815608581')
