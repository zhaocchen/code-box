// 辅助函数
function createBuckets(arr, size) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let bucketCount = Math.floor((maxNum - minNum) / size) + 1;
    let buckets = Array.from({length: bucketCount}, () => []);
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        let bucketIndex = Math.floor((curNum - minNum) / size);
        buckets[bucketIndex].push(curNum);
    }
    return buckets;
}

function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > tmp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = tmp;
    }
    return arr;
}

function bucketSort(arr) {
    let buckets = createBuckets(arr, 5);
    let res = [];
    for (let curBucket of buckets) {
        let sortedBucket = insertionSort(curBucket);
        res.push(...sortedBucket)
    }
    return res;
}


var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];

console.log(bucketSort(testArr));


