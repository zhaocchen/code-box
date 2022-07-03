/**
 * @param {number[][]} grid
 * @return {boolean}
 */
 var checkXMatrix = function(grid) {
    const m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j == i || j == (n - 1 - i)) {
                if (!grid[i][j]) return false;
            } else {
                if (grid[i][j]) return false;
            }
        }
    }
    return true;
};

console.log(checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]));
console.log(checkXMatrix([[5,7,0],[0,3,1],[0,5,0]]));