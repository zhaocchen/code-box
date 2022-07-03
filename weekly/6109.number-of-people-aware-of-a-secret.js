/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
 var peopleAwareOfSecret = function(n, delay, forget) {
    let dp = new Array(n + 1).fill(0n);
    dp[1] = 1n;
    for (let i = 2; i <= n; i++) {
        let pre = 0n;
        for (let j = i - forget + 1; j <= i - delay; j++) {
            if (j > 0) {
                pre += dp[j];
            }
        }
        dp[i] = pre;
    }
    let pre = 0n;
    let i = n + 1;
    for (let j = i - forget; j < i; j++) {
        if (j > 0) {
            pre += dp[j];
        }
    }
    return Number(pre % BigInt(10 ** 9 + 7));
};

console.log(peopleAwareOfSecret(6, 2, 4));
console.log(peopleAwareOfSecret(4, 1, 3));
console.log(peopleAwareOfSecret(684, 18, 496));
