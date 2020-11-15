/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // 5: 0, 10: 5, 20: 15 = 10 + 5 = 5 + 5 + 5
    let five = 0;
    let ten = 0;
    for (let coin of bills) {
        if (coin == 5) {
            five++;
        } else if (coin == 10) {
            ten++;
            five--;
        } else {
            // 20++
            five--;
            ten > 0 ? ten-- : five = five - 2;
        }
        if (five < 0) return false;
    }
    return true;
};

// @lc code=end
// console.log(lemonadeChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]))
// console.log(lemonadeChange([5,5,20,5,5,10,5,10,5,20]))
