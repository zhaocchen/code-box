var eliminateMaximum = function(dist, speed) {
    let arr = [];
    for (let i = 0; i < dist.length; i++) {
        arr[i] = dist[i] / speed[i];
    }
    arr.sort((a, b) => a - b);
    // console.log(arr);
    let ans = 0;
    while (arr[0] > ans) {
        arr.shift();
        ++ans;
    }
    return ans;
};


console.log(eliminateMaximum([1,3,4], [1,1,1]));
console.log(eliminateMaximum([1,1,2,3], [1,1,1,1]));
console.log(eliminateMaximum([3,2,4], [5,3,2]));