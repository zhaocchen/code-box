

/*
根据传入参数n（数字）对一堆数组按照距离n
最近的顺序排序。（距离即与n的差值的绝对值）
*/

function sort(arr, n) {
    arr.sort((a, b) => Math.abs(a-n) - Math.abs(b-n));
    return arr;
}

function sort2(arr, n) {
    arr.sort((a, b) => a - b);
    if (n < arr[0]) return arr;
    if (n > arr.slice(-1)[0]) return arr.slice().reverse();
    var start, end;
    for (let i = 0; i < arr.length-1; i++) {
        if (n >= arr[i] && n <= arr[i+1]) {
            start = i;
            end = i+1;
            break;
        }
    }
    // console.log(start, end);
    var res = [];
    while (start >= 0 || end <= arr.length) {
        if (start < 0) {
            // 直接拼接右边
            res.push(...arr.slice(end));
            return res
        }
        if (end > arr.length) {
            // 直接拼接左边
            res.push(...arr.slice(0, start+1).reverse());
            return res
        }
        if (Math.abs(arr[start] - n) <= Math.abs(arr[end] - n)) {
            res.push(arr[start]);
            start--
        } else {
            res.push(arr[end]);
            end++
        }
    }
    return res;
} 

console.log(sort([7, 28, -1, 0, 7, 33], 4))
console.log(sort2([7, 28, -1, 0, 7, 33], 4))
// console.log(sort([1,2,4,5], 3))
