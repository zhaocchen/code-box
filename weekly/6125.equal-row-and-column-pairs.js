/**
 * @param {number[][]} grid
 * @return {number}
 */
 var equalPairs = function(grid) {
    const n = grid.length;
    let rows = grid.map(v => v.join(','));
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (j > 0) {
                str += ',';
            }
            str += grid[j][i];
        }  
        ans += rows.filter(row => row == str).length;
    }
    return ans;
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));