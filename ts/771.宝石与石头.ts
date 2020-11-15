/*
 * @lc app=leetcode.cn id=771 lang=typescript
 *
 * [771] 宝石与石头
 */

// @lc code=start
function numJewelsInStones(J: string, S: string): number {
    let count: number = 0;
    for (let i: number = 0; i < J.length; i++) {
        const char: string = J[i];
        const reg: RegExp = new RegExp(char, "g");
        // console.log(i, matchCount, S.match(reg));
        count += S.match(reg)?.length ?? 0;
    }
    return count;
};
// @lc code=end

// console.log(numJewelsInStones("aA", "aAAbbbb"))