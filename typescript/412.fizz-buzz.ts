/*
 * @lc app=leetcode.cn id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
    let res: string[] = [];
    for (let i = 1; i <= n; i++) {
        const isThree: boolean = i % 3 === 0;
        const isFive: boolean = i % 5 === 0;
        if (isThree && isFive) {
            res.push('FizzBuzz');
        } else if (isThree) {
            res.push('Fizz')
        } else if (isFive) {
            res.push('Buzz')
        } else {
            res.push(String(i))
        }
    }
    return res;
};
// @lc code=end

