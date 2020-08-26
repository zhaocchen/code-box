

function shellSort(arr) {
    var n = arr.length;
    for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = gap; i < n; i++) {
            var temp = arr[i];
            let j = i;
            while (j >= gap && arr[j-gap] > temp) {
                arr[j] = arr[j-gap];
                j -= gap;
            }
            arr[j] = temp;
        }
    }
    return arr;
}


var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
console.log(shellSort(testArr));
