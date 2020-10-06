// 有一个 8x8 的棋盘，放 8 个棋子（皇后），每个棋子所在的行、列、对角线都不能有另一个棋子

function cal8queens (row, res) {
    res = res || new Array(8).fill(null)
    if (row == 8) {
        console.log(res)
        generateQueens(res)
        return;
    }
    for(let column = 0; column < 8; column++) {
        if(check(row, column, res)) {
            res[row] = column;
            cal8queens(row+1, res)
        }
    }
}

function check(row, column, res) {
    let left = column - 1;
    let right = column + 1;
    for (let i = row - 1; i >= 0; i--) {
        if (res[i] == column) return false;
        if (left >= 0) {
            if (res[i] == left) return false;
        }
        if (right < 8) {
            if (res[i] == right) return false;
        }
        left--;
        right++;
    }
    return true;
}

function generateQueens (arr) {
    let res = Array.from({length: 8}, v => new Array(8).fill('   '))
    console.log('------------------------')
    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            if (arr[row] == column) res[row][column] = ' Q '
        }
        console.log(res[row].join(''))
    }
}

// generateQueens([
//     7, 3, 0, 2,
//     5, 1, 6, 4
//   ])

console.log(cal8queens(0))