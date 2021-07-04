var countGoodNumbers = function(n) {
    let mod = BigInt(10 ** 9 + 7);
    // [0, 2, 4, 6, 8]
    // [2, 3, 5, 7]
    let x = BigInt(Math.ceil(n / 2));
    let y = BigInt(Math.floor(n / 2));
    // console.log(x, y);
    let ans = (5n ** x) * (4n ** y);
    return parseInt(ans % mod);
};


console.log(countGoodNumbers(1));
console.log(countGoodNumbers(4));
console.log(countGoodNumbers(5));
console.log(countGoodNumbers(6));
console.log(countGoodNumbers(50)); // 564908303