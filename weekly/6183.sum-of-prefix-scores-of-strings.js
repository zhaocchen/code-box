/**
 * @param {string[]} words
 * @return {number[]}
 */
 var sumPrefixScores = function(words) {
    let hashMap = new Map();
    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            let key = word.slice(0, i + 1);
            hashMap.set(key, (hashMap.get(key) || 0) + 1);
        }
    }
    let ans = [];
    for (let word of words) {
        let cnt = 0;
        for (let i = 0; i < word.length; i++) {
            cnt += hashMap.get(word.slice(0, i + 1));
        }
        ans.push(cnt);
    }
    return ans;
};

console.log(sumPrefixScores(["abc","ab","bc","b"]));
console.log(sumPrefixScores(["abcd"]));
