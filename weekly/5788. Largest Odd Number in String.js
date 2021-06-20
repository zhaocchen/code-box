/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
    let n = num.length;
    for (let j = n - 1; j >= 0; j--) {
        if (num.charAt(j) & 1 == 1) {
            return num.slice(0, j+1);
        }
    }
    return '';
};


console.log(largestOddNumber('52'));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));