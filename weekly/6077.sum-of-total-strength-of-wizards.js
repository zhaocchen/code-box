/**
 * @param {number[]} strength
 * @return {number}
 */
//  var totalStrength = function(strength) {
//     const n = strength.length;
//     const p = 10 ** 9 + 7;
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         let sum = 0, min = Number.MAX_SAFE_INTEGER;
//         for (let j = i; j < n; j++) {
//             const cur = strength[j];
//             sum += cur;
//             min = Math.min(min, cur);
//             ans += (min * sum % p);
//         }
//     }
//     return ans % p;
// };
// 超时

console.log(totalStrength([1,3,1,2]));
console.log(totalStrength([5,4,6]));