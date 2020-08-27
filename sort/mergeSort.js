function mergeArr(leftArr, rightArr) {
  // 双指针
  var res = [];

  var i = 0;
  var j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] > rightArr[j]) {
      res.push(rightArr[j]);
      j++;
    } else {
      res.push(leftArr[i]);
      i++;
    }
  }

  if (i == leftArr.length) {
    res.push(...rightArr.slice(j));
  }

  if (j == leftArr.length) {
    res.push(...leftArr.slice(i));
  }

  return res;
}

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  var middle = Math.floor(arr.length / 2);
  var leftArr = arr.slice(0, middle);
  var rightArr = arr.slice(middle);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return mergeArr(leftArr, rightArr);
}

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
// console.log(mergeArr([1,3], [2,4]))
// console.log(mergeArr([1,2], [3,4]))
  console.log(mergeSort(testArr));
