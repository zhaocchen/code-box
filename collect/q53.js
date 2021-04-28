// 数字 1~n 的两副牌，共 2n 张。
// 把这些牌排成一排，然后两张 1 的中间放一张牌，
// 两张 2 的中间放两张牌……两张 n 的中间放 n 张牌


/**
 * 
 * @param { number } n
 * @return { number }
 */
function search(n) {
    let res = [];
    let prev = new Array(n * 2).fill(0);
    dfs(n, 1, prev, res);
    // console.log('res: ', res);
    return res.length;
}

function dfs (n, num, prev, res) {
    // console.log('n, num, prev, res: ', n, num, prev);
    if (num == n+1) {
        res.push(prev.slice(0));
        return;
    }
    for (let i = 0; i + num +1 < n * 2; i++) {
        // 寻找可放置数字num的位置， 且间隔为num
        if (!prev[i] && !prev[i+num+1]) {
            prev[i] = num;
            prev[i+num+1] = num;
            dfs(n, num+1, prev, res);
            // 回溯
            prev[i] = 0;
            prev[i+num+1] = 0;
        }
    }
}

console.log(search(3));

// res:  [ [ 3, 1, 2, 1, 3, 2 ], [ 2, 3, 1, 2, 1, 3 ] ]
// 2

console.log(search(11));

// 35584