/**
 * @param {string} s
 * @return {string}
 */
//  var removeStars = function(s) {
//     let reg = /[a-z]\*/g;
//     while (reg.test(s)) {
//         s = s.replace(reg, '');
//     }
//     return s;
// };
 var removeStars = function(s) {
    if (!s.includes('*')) return s;
    let arr = s.split('');
    const n = s.length;
    let j = n - 1, i = j;
    let testLowerCase = /[a-z]/;
    while (i > -1 && j > -1 && arr.includes('*')) {
        while (j > -1 && arr[j] != '*' ) j--;
        if (j < i) i = j;
        while (i > -1 && !testLowerCase.test(arr[i])) i--;
        if (i > -1 && j > -1 && testLowerCase.test(arr[i]) && arr[j] == '*') {
            arr[i] = '';
            arr[j] = '';
            i--;
            j--;
        }
    }
    return arr.join('');
};

console.log(removeStars('leet**cod*e'));
console.log(removeStars("erase*****"));