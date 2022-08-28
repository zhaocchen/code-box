/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
 var largestLocal = function(grid) {
    const n = grid.length;
    let ans = Array.from({ length: n - 2}, v => new Array(n - 2));
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            ans[i][j] = getMax(grid, i + 1, j + 1);
        }
    }
    return ans;
};

function getMax (grid, i, j) {
    let max = grid[i][j];
    for (let k = 0; k < 3; k++) {
        max = Math.max(max, ...grid[i - 1 + k].slice(j - 1, j + 2));
    }
    return max;
}

console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]));
console.log(largestLocal([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]));