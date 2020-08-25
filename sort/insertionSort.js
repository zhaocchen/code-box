


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

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
console.log(insertionSort(testArr));

