

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
 var rearrangeCharacters = function(s, target) {
    let cnt1 = new Array(128).fill(0),
    cnt2 = new Array(128).fill(0);
    for (let i of target) {
        cnt1[i.charCodeAt(0)]++;
    }
    for (let i of s) {
        cnt2[i.charCodeAt(0)]++;
    }
    const max = Number.MAX_SAFE_INTEGER;
    let ans = max;
    for (let i = 0; i < 128; i++) {
        if (cnt1[i] === 0) continue;
        ans = Math.min(ans, Math.floor(cnt2[i] / cnt1[i]));
    }
    return ans === max ? 0 : ans;
};

console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));
console.log(rearrangeCharacters("abcba", "abc"));
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"));