function quickSort(arr, start, end) {
    if (start >= end) return;
    let pivotIndex = partition(arr, start, arr.length - 1);
    quickSort(arr, start, pivotIndex-1);
    quickSort(arr, pivotIndex+1, arr.length - 1);
}

function partition(arr, start, end) {
    var pivot = arr[start];
    let left = start, right = end;
    while (left < right) {
        while (left < right && arr[right] > pivot) right--;
        while (left < right && arr[left] <= pivot) left++;
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }
    [arr[start], arr[left]] = [arr[left], arr[start]]
    return left;
}

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
quickSort(testArr, 0, testArr.length - 1)
console.log(testArr);

// [
//     1, 17, 21, 22, 29,
//    34, 50, 60, 61, 62,
//    72
//  ]