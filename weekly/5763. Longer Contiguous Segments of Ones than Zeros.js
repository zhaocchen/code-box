/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
    return findMaxSub(s, '1') > findMaxSub(s, '0');
};


function findMaxSub(str, char) {
    let max = 0;
    let prev = 0;
    for (let cur of str) {
        if (cur == char) {
            prev++;
        } else {
            prev = 0;
        }
        max = Math.max(max, prev);
    }
    return max;
}

// console.log(findMaxSub('110100010', '0'));
// console.log(findMaxSub('110100010', '1'));


console.log(checkZeroOnes('1101'))
console.log(checkZeroOnes('111000'))
console.log(checkZeroOnes('110100010'))