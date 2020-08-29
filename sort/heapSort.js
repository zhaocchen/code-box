
function heapify(arr, len, i) {
    let largest = i;
    let start = 2 * i +1;
    let end = 2 * i +2;
    if (start < len && arr[start] > arr[largest]) {
        largest = start;
    }
    if (end < len && arr[end] > arr[largest]) {
        largest = end;
    }
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, len, largest)
    }
    // console.log(n, i, arr)
}

function heapSort(arr) {
    let len = arr.length;
    for (var i = Math.floor(len / 2 -1); i >= 0; i--) {
        heapify(arr, len, i);
    }
    for (let i=len - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
heapSort(testArr)
console.log(testArr);
