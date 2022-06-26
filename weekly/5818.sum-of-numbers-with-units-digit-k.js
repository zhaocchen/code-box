/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
 var minimumNumbers = function(num, k) {
    if (!num) return 0;
    let digit = num % 10;
    for (let i = 0; i < 9; i++) {
        let target = i * k;
        if (target <= num && target % 10 == digit) return i;
    }
    return -1;
};

console.log(minimumNumbers(58, 9));
console.log(minimumNumbers(37, 2));
console.log(minimumNumbers(0, 7));
console.log(minimumNumbers(10, 8));