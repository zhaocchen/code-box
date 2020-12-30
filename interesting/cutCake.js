
// 要求切分后每一块上面的草莓个数都不相同,假设切分出来的 N 块酥饼上要各有“1~N 个（共 N(N + 1)÷2 个草莓）”
// 加一个条件，那就是“一定要使相邻的两块酥饼上的数字之和是平方数”

function cutCake() {
    let n = 2;
    while (n < 35) {
        let square = Array.from({ length: Math.floor(Math.sqrt(n * 2 -1))}, (v,i) => (i+1) ** 2)
        if (check(n, 1, [1], square)) break;
        n++;
    }
    return n
}

function check(n, pre, res, square) {
    if (res.length == n) {
        // Check first and last
        if (square.includes(1+ pre)) {
            return true
        }
    } else {
        for (let i = 1; i<=n;i++) {
            if (!res.includes(i) && square.includes(pre +i) && check(n, i, [...res, i], square)) {
                return true
            }
        }
    }
    return false
}


console.log(cutCake());
