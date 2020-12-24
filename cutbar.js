function cutbar(m, n, sum, depth) {
    // console.log('m, n, sum, depth: ', m, n, sum, depth);
    if (sum >= n) {
        return depth;
    } else if (sum < m) {
        return cutbar(m, n, sum * 2, depth+1)
    } else {
        return cutbar(m, n, sum + m, depth+1)
    }
}

console.log(cutbar(3, 20, 1, 0));
console.log(cutbar(5, 100, 1, 0));
