
function swap(arr, indexOld, indexNew) {
    var tmp = arr[indexOld];
    arr[indexOld] = arr[indexNew];
    arr[indexNew] = tmp;
    return arr;
}

function selectionSort(arr) {
    var indexMin
    for (var i = 0; i < arr.length - 1; i++) {
        indexMin = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (i != indexMin) {
            swap(arr, i, indexMin);
        }
    }
    return arr;
}


var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
// var testArr = [2,3,5,1];
console.log(selectionSort(testArr));
