/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // if (n < 3) return 0;
    // if (n < 4) return n-2;
    let count = 0;
    let sings = Array.from({length: n}, v => 0);
    // let sings = new Uint8Array(n);
    for (let i = 2; i < n; i++) {
        if (!sings[i - 1]) {
            count++;

            for (let j = i * i; j <= n; j += i) {
                sings[j-1] = true;
                // console.log(i, j)
            }
        }
    }
    return count;
};

console.log(countPrimes(10))

// @lc code=end

