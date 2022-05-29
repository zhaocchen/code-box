/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
//  var minimumLines = function(stockPrices) {
//     stockPrices.sort((a, b) => a[0] - b[0]);
//     let ans = 0;
//     let pre = null;
//     const n = stockPrices.length;
//     for (let i = 1; i < n; i++) {
//         const [x1, y1] = stockPrices[i - 1];
//         const [x2, y2] = stockPrices[i];
//         const slope = (y2 - y1) / (x2 - x1);
//         if (slope != pre) ans++;
//         pre = slope;
//     }
//     return ans;
// };
// 报错

console.log(minimumLines([[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]));
console.log(minimumLines([[3,4],[1,2],[7,8],[2,3]]));

// Hidden for this testcase during contest.