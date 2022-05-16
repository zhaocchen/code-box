/**
 * @param {number[]} candidates
 * @return {number}
 */
 var largestCombination = function(candidates) {
    let ans = 0;
    for (let i = 28; i >= 0; i--) {
        let count = 0;
        for (let num of candidates) {
            if (num >> i & 1) count++;
        }
        ans = Math.max(ans, count);
    }
    return ans;
};

console.log(largestCombination([16,17,71,62,12,24,14]));
console.log(largestCombination([8,8]));