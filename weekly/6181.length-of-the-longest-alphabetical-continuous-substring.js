/**
 * @param {string} s
 * @return {number}
 */
 var longestContinuousSubstring = function(s) {
    let max = 0;
    let cnt = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (i == 0 || s.charCodeAt(i - 1) + 1 == s.charCodeAt(i)) {
            cnt++;
        } else {
            max = Math.max(cnt, max);
            cnt = 1;
        }
    }
    return Math.max(cnt, max);
};

console.log(longestContinuousSubstring("abacaba"));
console.log(longestContinuousSubstring("abcde"));