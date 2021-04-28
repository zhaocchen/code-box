
// 把长度为 n 厘米的木棒切分为 1 厘米长的小段,但是 1 根木棒只能由 1 人切分，当木棒被切分为 3 段后，可以同时由 3 个人分别切分木棒


function cutbar(m, n) {
    // 逆向思维
    let depth = 0;
    let sum = 1;
    while (sum < n) {
        sum += Math.min(sum, m);
        depth++;
    }
    return depth;
}

console.log(cutbar(3, 20));
console.log(cutbar(5, 100));

// 8
// 22
