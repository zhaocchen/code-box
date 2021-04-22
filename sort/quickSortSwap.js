function quickSort(arr, start, end) {
    if (start > end) return;
    let pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex-1);
    quickSort(arr, pivotIndex+1, end);
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let i = start - 1;
    for (let j=start; j<end; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i+1], arr[end]] = [arr[end], arr[i+1]]
    return i+1;
}

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
quickSort(testArr, 0, testArr.length - 1)
console.log(testArr);

// [
//     1, 17, 21, 22, 29,
//    34, 50, 60, 61, 62,
//    72
//  ]