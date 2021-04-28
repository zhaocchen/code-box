// 如下，实现 `calc` 方法，可以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数。
/**
 * @param {number} n 乘积
 * @return {Array} 拆解后的乘数
 * 质数 * calc(val / 质数)
 */
function calc(n) {
    // if (n < 2) return [];
    let num = 2;
    let res = [];
    while(n > 1) {
        while(n % num == 0) {
            n = n / num;
            res.push(num)
        }
        num++
    }
    return res
}

// 质数

console.log(calc(2));

// [2]
console.log(calc(8));

// [2, 2, 2] = 2 * 4 = 2 * 2 * 2
console.log(calc(24));

// [2, 2, 2, 3] = ... * 6 = 2 * 6
console.log(calc(30));

// [2, 3, 5] = 2 * 15 = 2 * 3 * 5