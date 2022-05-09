/**
 * @param {string} num
 * @return {string}
 */
 var largestGoodInteger = function(num) {
    const n = num.length;
    let ans = '';
    let i = 0;
    while(i < n - 2) {
        let cur = num.charAt(i);
        if (num.charAt(i + 1) === cur && num.charAt(i + 2) === cur) {
            i += 2;
            ans = Math.max(cur, ans);
        }
        i++;
    }
    return String(ans).repeat(3);
};

console.log(largestGoodInteger('6777133339'));
console.log(largestGoodInteger('2300019'));
console.log(largestGoodInteger('42352338'));