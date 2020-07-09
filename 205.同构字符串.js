/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let letterMap = new Map();
    for (let index in s) {
        let sourceLetter = s[index];
        let targetLetter = t[index];
        if (!letterMap.has(sourceLetter)) {
            // console.log(sourceLetter, letterMap)
            if ([...letterMap.values()].includes(targetLetter)) {
                return false;
            }
            letterMap.set(sourceLetter, targetLetter);
        } else {
            if (letterMap.get(sourceLetter) !== targetLetter) {
                return false;
            }
        }
    }
    return true;
};


// console.log(isIsomorphic("egg", "add"))
// console.log(isIsomorphic("ab", "aa"))
// @lc code=end

