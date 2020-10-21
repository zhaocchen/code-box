function merge (left, right) {
  // Merge sorted array
  let res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return [...res, ...left, ...right];
}

function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;
  const half = len / 2;
  const left = arr.splice(0, half)
  return merge(mergeSort(left), mergeSort(arr));
}

var testArr = [61, 17, 29, 22, 34, 60, 72, 21, 50, 1, 62];
// console.log(mergeArr([1,3], [2,4]))
// console.log(mergeArr([1,2], [3,4]))
  console.log(mergeSort(testArr));
