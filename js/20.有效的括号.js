/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 栈， 先进后出
    let bracket = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    var lefts = [...bracket.values()];
    let stack = [];
    for (let curChar of [...s]) {
        let lastItem = stack.slice(-1)[0];
        if (!lastItem || lastItem !== bracket.get(curChar)) {
            // 非法检查
            if (!lefts.includes(curChar)) {
                return false;
            }
            stack.push(curChar);
        } else {
            stack.pop();
        }
        // console.log(curChar, stack)
    }
    return stack.length === 0;
};
// @lc code=end

// console.log(isValid('()'))
// console.log(isValid('(]'))
