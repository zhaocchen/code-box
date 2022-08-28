/**
 * @param {string} num
 * @return {string}
 */
 var largestPalindromic = function(num) {
    let counter = new Array(10).fill(0);
    for (let key of num) {
        counter[key] += 1;
    }
    // console.log(counter);
    let ans = [];
    // insert 1-9
    for (let i = 1; i < 10; i++) {
        if (counter[i] > 1) {
            const groupCount = Math.floor(counter[i] / 2);
            const cur = String(i).repeat(groupCount).slice('');
            ans.push(...cur);
            ans.unshift(...cur);
            counter[i] -= groupCount * 2;
        }
    }
    // insert 0
    if (ans.length > 0 && counter[0] > 1) {
        const i = 0;
        const groupCount = Math.floor(counter[i] / 2);
        const cur = String(i).repeat(groupCount * 2);
        ans.splice(ans.length / 2, 0, ...cur.slice(''));
        counter[i] -= groupCount * 2;
    }
    // insert sigle number
    for (let i = 9; i > -1; i--) {
        if (!counter[i]) continue;
        ans.splice(ans.length / 2, 0, i);
        break;
    }
    // console.log(ans);
    return ans.join('');
};

// console.log(largestPalindromic('444947137'));
// console.log(largestPalindromic('00009'));
// console.log(largestPalindromic('00001105'));
// console.log(largestPalindromic('0000'));
console.log(largestPalindromic("2420589292"));