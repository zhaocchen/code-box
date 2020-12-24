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
