/**
 * @param {number[]} edges
 * @return {number}
 */
 var edgeScore = function(edges) {
    const n = edges.length;
    let ans = new Array(n).fill(0);
    for (let u = 0; u < n; u++) {
        const v = edges[u]; // u -> v
        ans[v] += u;
    }
    // console.log(ans);
    return ans.indexOf(Math.max(...ans));
};

console.log(edgeScore([1,0,0,0,0,7,7,5]));
console.log(edgeScore([2,0,0,2]));