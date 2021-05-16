/**
 * @param {string} s
 * @return {number}
 */
 var minSwaps = function(s) {
    if (s.length < 2) return 0;
    let n = s.length;
    let sum = 0;
    let even = 0;
    for (let i = 0; i < n; i++) {
        let cur = Number(s[i]);
        sum += cur;
        if (i % 2 == 0) {
            even += cur;
        }
    }
    // console.log(n, sum, even);
    // 合法
    if (Math.floor(n / 2) != sum && Math.ceil(n / 2) != sum) return -1;
    // 偶数位
    if (n % 2 == 0) {
        return Math.min(even, sum - even);
    } else {
        return (sum % 2 == 0) ? even : sum - even;
    }
};

// console.log(minSwaps('1110'), -1);
// console.log(minSwaps('111000'), 1);
console.log(minSwaps('10'), 0);
// console.log(minSwaps('010'), 0);
// console.log(minSwaps('100'), 1);
// console.log(minSwaps('1'), 0);