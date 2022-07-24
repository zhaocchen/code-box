/**
 * @param {number[]} amount
 * @return {number}
 */
 var fillCups = function(amount) {
    let ans = 0;
    while (!amount.includes(0)) {
        amount.sort((a, b) => a - b);
        ans++;
        amount = [amount[0], amount[1] - 1, amount[2] - 1];
    }
    return ans + Math.max(...amount);
};

console.log(fillCups([5,0,0]));
console.log(fillCups([1,4,2]));
console.log(fillCups([5,4,4]));