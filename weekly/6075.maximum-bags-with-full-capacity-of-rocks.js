/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
// 超时
//  var maximumBags = function(capacity, rocks, additionalRocks) {
//     const n = capacity.length;
//     const diffs = capacity.map((c, i) => c - rocks[i]);
//     diffs.sort((a, b) => a - b);
//     let ans = 0;
//     for (let i = 0; i < n && (diffs[i] === 0 || diffs[i] <= additionalRocks); i++) {
//         ans++;
//         additionalRocks -= diffs[i];
//     }
//     return ans;
// };

console.log(maximumBags([2,3,4,5], [1,2,4,4], 2));
console.log(maximumBags([10,2,2], [2,2,0], 100));