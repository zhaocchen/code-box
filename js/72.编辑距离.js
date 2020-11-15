/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let len1 = word1.length, len2 = word2.length;
    if (!len1 || !len2) return Math.max(len1, len2);
    let dp = Array.from({length: len1+1} , () => new Array(len2+1).fill(null));
    
    for (let i = 0; i < len1+1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j < len2+1; j++) {
        dp[0][j] = j;
    }

    // console.log(dp)

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            let curCount;
            // console.log(word1[i], word2[j])
            if (word1[i] === word2[j]) {
                curCount = dp[i][j];
            } else {
                curCount = Math.min(dp[i][j], dp[i+1][j], dp[i][j+1]) + 1;
            }
            dp[i+1][j+1] = curCount
        }
    }

    // console.log(dp)

    return dp[len1][len2]

};
// @lc code=end
// console.log(minDistance("horse", "ros"))
// console.log(minDistance("", "a"))
// console.log(minDistance("distance", "springbok"))
