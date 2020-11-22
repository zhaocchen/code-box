/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
    enum CharMap {
        I = 1,
        V = 5,
        X = 10,
        L = 50,
        C = 100,
        D = 500,
        M = 1000,
    };
    let len: number = s.length;
    if (len == 0) { return 0; }
    if (len == 1) return CharMap[s.charAt(0) as keyof typeof CharMap];
    let res: number = 0;
    for (let i: number = 0; i < len; i++) {
        let cur: number = CharMap[s.charAt(i) as keyof typeof CharMap];
        if (i+1 < len) {
            let next: number = CharMap[s.charAt(i+1) as keyof typeof CharMap];
            if (next > cur) {
                res += (next - cur);
                i++;
                continue;
            }
        }
        res += cur;
    }
    return res;
};
// @lc code=end

// console.log(romanToInt("III"));
// console.log(romanToInt("IV"));