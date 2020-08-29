
function countingSort(arr) {
    if (arr.length < 2) return arr;
    let maxNum = Math.max(...arr);
    let counts = new Array(maxNum+1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        counts[curNum]++;
    }
    let sortedIndex = 0;
    for (let i = 0; i < counts.length; i++) {
        let curCount = counts[i];
        while (curCount > 0) {
            arr[sortedIndex++] = i;
            curCount--;
        }
    }
    // console.log(counts);
    return arr
}

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
console.log(countingSort(testArr));
