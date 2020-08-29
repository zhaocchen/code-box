
// 辅助函数
function countingSortForRadix(arr, radixBase, significantDigit, minNum) {
    let bucketsIndex;
    let buckets = new Array(radixBase).fill(0);
    let aux = [];
    let getIndex = (curNum) => Math.floor((curNum - minNum) / significantDigit % radixBase);
    for (let i = 0; i < arr.length; i++) {
        bucketsIndex = getIndex(arr[i]);
        buckets[bucketsIndex]++;
    }

    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1]
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        bucketsIndex = getIndex(arr[i])
        buckets[bucketsIndex]--;
        aux[buckets[bucketsIndex]] = arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = aux[i]
    }

    return arr;
}

function radixSort(arr, radixBase = 10) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let significantDigit = 1;
    while ((maxNum - minNum) / significantDigit >= 1) {
        arr = countingSortForRadix(arr, radixBase, significantDigit, minNum);
        significantDigit *= radixBase;
    }
    return arr;
}

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];

console.log(radixSort(testArr))


