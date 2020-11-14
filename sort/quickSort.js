
function quickSort(arr) {
    partition(arr, 0, arr.length - 1)
    return arr;
}

function partition(arr, start, end) {
    if (start >= end) return;
    var pivot = arr[start];
    var i = start
    var j = end;
    while (i < j) {
        while (i < j && arr[j] >= pivot) j--;
        if (i<j) {
            arr[i] = arr[j];
            i++;
        }
        while (i < j && arr[i] < pivot) i++;
        if (i<j) {
            arr[j] = arr[i];
            j--;
        }
    }
    arr[i] = pivot;
    // console.log(start, end,i, pivot, arr)
    partition(arr, start, i - 1);
    partition(arr, i + 1, end);
}

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
quickSort(testArr, 0, testArr.length - 1)
console.log(quickSort(testArr));